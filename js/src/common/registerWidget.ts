import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import OnlineUsersWidget from './components/OnlineUsersWidget';

export default function(app) {
  (new Widgets).add({
    key: 'onlineUsers',
    component: OnlineUsersWidget,
    isDisabled: () => !app.forum.attribute('canViewLastSeenAt') || !app.forum.attribute('canSearchUsers'),
    isUnique: true,
    placement: 'end',
    position: 1,
  }).extend(app, 'afrux-online-users-widget');
};
