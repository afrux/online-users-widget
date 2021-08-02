import registerWidget from '../common/registerWidget';

app.initializers.add('afrux/online-users-widget', () => {
  registerWidget(app);
});
