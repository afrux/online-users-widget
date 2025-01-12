import app from 'flarum/common/app';
import type Mithril from 'mithril';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Tooltip from 'flarum/common/components/Tooltip';
import avatar from 'flarum/common/helpers/avatar';
import Link from 'flarum/common/components/Link';
import extractText from 'flarum/common/utils/extractText';
import type User from 'flarum/common/models/User';

import Widget, { type WidgetAttrs } from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class OnlineUsersWidget extends Widget<WidgetAttrs> {
  className(): string {
    return 'Afrux-OnlineUsersWidget';
  }

  icon(): string {
    return 'fas fa-user-friends';
  }

  title(): string {
    return extractText(app.translator.trans('afrux-online-users-widget.forum.widget.title'));
  }

  content(): Mithril.Children {
    if (this.attrs.state.isLoading) {
      return <LoadingIndicator />;
    }

    const max = app.forum.attribute<number>('afrux-online-users-widget.max_users') || 15;
    const users = app.forum.onlineUsers() || [];

    return (
      <div className="Afrux-OnlineUsersWidget-users">
        <div className="Afrux-OnlineUsersWidget-users-message">
          {users.length === 0 ? app.translator.trans('afrux-online-users-widget.forum.widget.empty') : null}
        </div>
        <div className="Afrux-OnlineUsersWidget-users-list">
          {users.slice(0, max).map((user: User) => (
            <Link href={app.route('user', { username: user.slug() })} className="Afrux-OnlineUsersWidget-users-item">
              <Tooltip text={user.displayName()}>{avatar(user)}</Tooltip>
            </Link>
          ))}
          {users.length > max ? (
            <span className="Afrux-OnlineUsersWidget-users-item Afrux-OnlineUsersWidget-users-item--plus">
              <span className="Avatar">{`+${max}`}</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}
