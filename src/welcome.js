import { userName } from './util/user-name.js'

const welcome = async () => {
  const name = userName();
  
  if (name) {
    process.stdout.write(`Welcome to the File Manager, \x1b[36m${name.toString()}\x1b[0m!\n`);
    process.stdout.write(`Press \x1b[33m'ctrl+c' \x1b[0m or sent \x1b[33m'.exit' \x1b[0m command to exit\n`);
  }
}

welcome();