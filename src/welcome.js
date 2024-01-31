import { userName } from './util/user-name.js'
import { WELCOME_MESSAGE } from './common/const.js';

const welcome = async () => {
  const name = userName();
  
  if (name) {
    process.stdout.write(`Welcome to the File Manager, ${name.toString()}!\n`);
    process.stdout.write(`Press 'ctrl+c' or sent '.exit' command to exit\n`);
    process.stdout.write(`${WELCOME_MESSAGE}\n`);
  } else {
  }
}

welcome();