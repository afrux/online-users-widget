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

use Flarum\Api\Controller\ShowForumController;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface;

class LoadForumOnlineUsersRelationship
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
    * @var UserRepository
    */
    protected $repository;

    public function __construct(SettingsRepositoryInterface $settings, UserRepository $repository)
    {
        $this->settings = $settings;
        $this->repository = $repository;
    }

    public function __invoke(ShowForumController $controller, &$data, ServerRequestInterface $request)
    {
        $data['onlineUsers'] = $this->repository->getOnlineUsers(RequestUtil::getActor($request))['users'] ?? null;
    }
}
