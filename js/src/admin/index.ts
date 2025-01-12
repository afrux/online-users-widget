import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('afrux/online-users-widget', () => {
  registerWidget(app);

  app.extensionData
    .for('afrux-online-users-widget')
    .registerSetting({
      setting: 'afrux-online-users-widget.max_users',
      label: app.translator.trans('afrux-online-users-widget.admin.settings.max_users'),
      type: 'number',
    })
    .registerSetting({
      setting: 'afrux-online-users-widget.last_seen_interval',
      label: app.translator.trans('afrux-online-users-widget.admin.settings.last_seen_interval'),
      type: 'number',
    })
    .registerSetting({
      setting: 'afrux-online-users-widget.cache_ttl',
      label: app.translator.trans('afrux-online-users-widget.admin.settings.cache_ttl'),
      type: 'number',
    })
    .registerPermission(
      {
        icon: 'fas fa-user-clock',
        label: app.translator.trans('afrux-online-users-widget.admin.permissions.view_online_users_widget'),
        permission: 'viewOnlineUsersWidget',
        allowGuest: true,
      },
      'view'
    );
});
