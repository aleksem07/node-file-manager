import { userName } from './userName.js'

const welcome = async () => {
  const name = userName();
  
  if (name) {
    process.stdout.write(`Welcome to the File Manager, ${name.toString()}!`);
    process.stdout.write('\n')
  } else {
    process.stdout.write(`Welcome to the File Manager, Student1!`);
    process.stdout.write('\n')
  }
}

welcome();