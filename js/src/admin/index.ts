import registerWidget from '../common/registerWidget';

app.initializers.add('afrux/online-users-widget', () => {
  registerWidget(app);

  app.extensionData
    .for('afrux-online-users-widget')
    .registerSetting({
      setting: 'afrux-online-users-widget.max_users',
      label: app.translator.trans('afrux-online-users-widget.admin.settings.max_users'),
      default: 15,
      type: 'number',
    });
});
