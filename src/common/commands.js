import { exit } from '../util/exit.js';
import { userName } from '../util/user-name.js';
import { HOME_DIR } from './const.js';

const name = userName();

export const COMMANDS = {
  HELP: '.help',
  EXIT: '.exit',
  PWD: 'pwd',
  HOME_DIR: 'homedir' 
}

export const COMMANDS_RUN = {
  HELP: () => 'run .help',
  EXIT: () => exit(name),
  PWD: () => process.env.PWD,
  HOME_DIR: () => HOME_DIR,
}

export const COMMANDS_DESC = {
  HELP: '.help',
  EXIT: '.exit',
  PWD: 'pwd',
  HOME_DIR: 'homedir' 
}

