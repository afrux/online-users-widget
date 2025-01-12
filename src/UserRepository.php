<?php

/*
 * This file is part of afrux/top-posters-widget.
 *
 * Copyright (c) 2021 Sami Mazouz.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Afrux\OnlineUsers;

use Afrux\ForumWidgets\SafeCacheRepositoryAdapter;
use Carbon\Carbon;
use Flarum\User\User;
use Flarum\Settings\SettingsRepositoryInterface;

class UserRepository
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var SafeCacheRepositoryAdapter
     */
    protected $cache;

    /**
     * @var array<callable(): string>
     */
    protected static $cacheKeyParameters = [];

    public static function addCacheKeyParameter(callable $parameter)
    {
        static::$cacheKeyParameters[] = $parameter;
    }

    public function __construct(SettingsRepositoryInterface $settings, SafeCacheRepositoryAdapter $cache)
    {
        $this->settings = $settings;
        $this->cache = $cache;
    }

    protected function cacheKey(User $actor): string
    {
        $params = [
            $actor->hasPermission('user.viewLastSeenAt') ? 'high-access' : 'low-access'
        ];

        foreach (self::$cacheKeyParameters as $parameter) {
            $params[] = $parameter($actor);
        }

        return 'afrux-online-users-widget.users-' . implode('-', $params);
    }

    public function getLastSeenUsers(User $actor): array
    {
        $limit = (int) $this->settings->get('afrux-online-users-widget.max_users');
        $ttl = (int) $this->settings->get('afrux-online-users-widget.cache_ttl');
        $interval = (int) $this->settings->get('afrux-online-users-widget.last_seen_interval');

        return $this->cache->remember($this->cacheKey($actor), $ttl, function () use ($actor, $limit, $interval) {
            $users = User::query()
                ->select('id', 'preferences')
                ->whereVisibleTo($actor)
                ->where('last_seen_at', '>', Carbon::now()->subMinutes($interval))
                ->limit($limit + 1)
                ->get();

            // user.viewLastSeenAt is a permission that allows viewing online state
            // regardless of the privacy preference not to be shown.
            if (! $actor->hasPermission('user.viewLastSeenAt')) {
                $users = $users->filter(function (User $user) {
                    return (bool) $user->getPreference('discloseOnline');
                });
            }

            return $users
                ->pluck('id')
                ->toArray();
        }) ?: [];
    }

    public function getOnlineUsers(User $actor)
    {
        return User::query()->whereIn('id', $this->getLastSeenUsers($actor))->get();
    }
}
