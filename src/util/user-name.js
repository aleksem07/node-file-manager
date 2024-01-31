import { USER_NAME_SYSTEM } from '../common/const.js';

export const userName = () => {
  const argv = process.argv.slice(2);
  const names = argv.toString().split(/\,|username\=|--/).filter(item => item !== '');
  const userName = names[1] ? names[1] : USER_NAME_SYSTEM;

  return userName;
}
