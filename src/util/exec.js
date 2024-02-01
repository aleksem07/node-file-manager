import { exec } from 'node:child_process';

export const execAsync = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) console.error(`Error executing command: ${error.message}`);
      try {
        resolve(stdout);
        process.stdout.write(stdout);
      } catch (error) {
        console.error(`Error executing command: ${error.message}`);
      }
    });
  });
}
