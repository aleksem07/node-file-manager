import { exit } from '../util/exit.js';
import { userName } from '../util/user-name.js';
import { HOME_DIR } from './const.js';

const name = userName();

export const COMMANDS = {
  HELP: '.help',
  EXIT: '.exit',
  PWD: 'pwd',
  HOME_DIR: 'homedir' ,
  ERROR: '.error',
}

export const COMMANDS_RUN = {
  HELP: () => 'run .help',
  EXIT: () => exit(name),
  PWD: () => process.env.PWD,
  HOME_DIR: () => HOME_DIR,
  ERROR: async () => {
    throw new Error('This is a simulated error');
  },
}

export const COMMANDS_HELP = {
  HELP: '.help',
  EXIT: '.exit',
  PWD: 'pwd',
  HOME_DIR: 'homedir',
  ERROR: '.error simulated new Error',
}

