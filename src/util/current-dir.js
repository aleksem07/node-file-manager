import { CURRENT_DIR } from '../common/const.js';


export const getCurrentDir = (dir = CURRENT_DIR) => {
  return `\x1b[32mYou are currently in\x1b[0m \x1b[34m${dir} \x1b[0m`;
}