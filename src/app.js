import './filesystem.js';

import { COMMANDS, COMMANDS_RUN } from './common/command.js';
import readlinePromises from 'node:readline/promises';


const stdin = process.stdin;
const stdout = process.stdout;
const rl = readlinePromises.createInterface({
  input: stdin,
  output: stdout,
})

const runApp = () => {
    rl.on('line', (line) => {
      const query = line.toString().trim();
      if (query === COMMANDS.EXIT) COMMANDS_RUN.EXIT();
      console.log(`> ${query}`)
    })
    
    rl.on('SIGINT', () => {
      COMMANDS_RUN.EXIT();
    })

}

runApp();