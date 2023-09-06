import { Result } from '../utils';

const fakeUserInfo = {
  userId: '1',
  username: '1548479699@qq.com',
  realName: 'zy1548479699@163.com',
  desc: 'manager',
  password: '123456',
  token: 'fakeToken1',
  roles: [
    {
      roleName: 'Super Admin',
      value: 'super',
    },
  ],
};
export default class UserService {
  async login() {
    return Result.success(fakeUserInfo);
  }

  async getUserInfoById() {
    return Result.success(fakeUserInfo);
  }
}
