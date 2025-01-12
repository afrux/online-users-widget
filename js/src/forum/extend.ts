import Extend from 'flarum/common/extenders';
import Forum from 'flarum/common/models/Forum';
import type User from 'flarum/common/models/User';

export default [
  new Extend.Model(Forum) //
    .hasMany<User>('onlineUsers'),
];
