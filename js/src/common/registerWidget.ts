import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import OnlineUsersWidget from './components/OnlineUsersWidget';

export default function (app) {
  new Widgets()
    .add({
      key: 'onlineUsers',
      component: OnlineUsersWidget,
      isDisabled: () => {
        const loadWithInitialResponse = app.forum.attribute('afrux-forum-widgets-core.preferDataWithInitialLoad');

        return
          (!loadWithInitialResponse && (!app.forum.attribute('canViewLastSeenAt') || !app.forum.attribute('canSearchUsers')))
          ||
          (loadWithInitialResponse && !app.forum.onlineUsers().length);
      },
      isUnique: true,
      placement: 'end',
      position: 1,
    })
    .extend(app, 'afrux-online-users-widget');
}
