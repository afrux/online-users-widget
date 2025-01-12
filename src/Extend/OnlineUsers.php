<?php

namespace Afrux\OnlineUsers\Extend;

use Afrux\OnlineUsers\UserRepository;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Foundation\ContainerUtil;
use Flarum\User\User;
use Illuminate\Contracts\Container\Container;

class OnlineUsers implements ExtenderInterface
{
    private $cacheKeyParameters = [];

    /**
     * @param (callable(User): string)|string $callable A callable/invokable that returns a string to be used as a cache key parameter.
     */
    public function cacheKeyParameters($callable): self
    {
        $this->cacheKeyParameters[] = $callable;

        return $this;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        foreach ($this->cacheKeyParameters as $parameter) {
            UserRepository::addCacheKeyParameter(ContainerUtil::wrapCallback($parameter, $container));
        }
    }
}
