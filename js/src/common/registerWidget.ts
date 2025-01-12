import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import OnlineUsersWidget from './components/OnlineUsersWidget';
import type AdminApplication from 'flarum/admin/AdminApplication';
import type ForumApplication from 'flarum/forum/ForumApplication';

export default function (app: ForumApplication | AdminApplication) {
  new Widgets()
    .add({
      key: 'onlineUsers',
      component: OnlineUsersWidget,
      isDisabled: (): boolean => {
        const onlineUsers = app.forum.onlineUsers();

        return Boolean(!app.forum.attribute<boolean>('canViewOnlineUsersWidget') || !onlineUsers || !onlineUsers.length);
      },
      isUnique: true,
      placement: 'end',
      position: 1,
    })
    .extend(app, 'afrux-online-users-widget');
}
