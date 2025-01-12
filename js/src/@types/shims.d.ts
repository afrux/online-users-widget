import Forum from 'flarum/common/models/Forum';
import User from 'flarum/common/models/User';

declare module 'flarum/common/models/Forum' {
  export default interface Forum {
    onlineUsers(): User[] | false;
  }
}
