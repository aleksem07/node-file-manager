import { exec } from 'node:child_process';

export const execAsync = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) console.error(`\x1b[31mInvalid input: \x1b[0m${error.message}`);
      try {
        resolve(stdout);
        console.log('\x1b[35m\x1b[0m')
        process.stdout.write(stdout);
      } catch (error) {
        console.error(`\x1b[31mInvalid input: \x1b[0m${error.message}`);
      }
    });
  });
}
