import { userName } from './userName.js'

const welcome = async () => {
  const name = userName();
  
  if (name) {
    process.stdout.write(`Welcome to the File Manager, ${name.toString()}!\n`);
    process.stdout.write(`Press 'ctrl+c' or sent '.exit' command to exit\n`);
    process.stdout.write(`Please, enter the command...\n`);
  } else {
    process.stdout.write(`Welcome to the File Manager, Student1!\n`);
  }
}

welcome();