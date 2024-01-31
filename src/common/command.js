import { exit } from '../util/exit.js';
import { userName } from '../util/user-name.js';

const name = userName();

export const COMMANDS = {
  EXIT: '.exit',
}

export const COMMANDS_RUN = {
  EXIT: () => exit(name),
}

