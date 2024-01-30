import { exit } from './exit.js';

const stdin = process.stdin;
const stdout = process.stdout;

const runApp = () => {
  stdin.on('data', (data) => {
    if (data.toString().trim() === '.exit') exit();

    stdout.write(data);
  })

  process.on('SIGINT', () => {
    exit();
  })
}

runApp();