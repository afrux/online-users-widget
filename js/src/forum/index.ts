import registerWidget from '../common/registerWidget';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import Forum from 'flarum/common/models/Forum';

app.initializers.add('afrux/online-users-widget', () => {
  Forum.prototype.onlineUsers = Model.hasMany('onlineUsers', User);

  registerWidget(app);
});
