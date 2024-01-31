import './filesystem.js';

import { COMMANDS, COMMANDS_RUN } from './common/commands.js';
import readlinePromises from 'node:readline/promises';


const stdin = process.stdin;
const stdout = process.stdout;
const rl = readlinePromises.createInterface({
  input: stdin,
  output: stdout,
})

const runApp = async () => {
    rl.on('line', (line) => {
      const query = line.toString().trim();
      const commandKeys = Object.keys(COMMANDS)
      let commandMatched = false;

      commandKeys.find(key => {
          if (query === COMMANDS[key]) {
          stdout.write(`> ${COMMANDS_RUN[key]()}\n`)
          commandMatched = true;
        }
      })

      if(!commandMatched) {
        stdout.write("> Please enter a valid command\n");
      }
    })

    rl.on('SIGINT', () => {
      COMMANDS_RUN.EXIT();
    })
}

runApp();