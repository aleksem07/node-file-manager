import { COMMANDS, COMMANDS_RUN } from './common/commands.js';
import readlinePromises from 'node:readline/promises';
import { execAsync } from './util/exec.js';

const stdin = process.stdin;
const stdout = process.stdout;
const rl = readlinePromises.createInterface({
  input:  stdin,
  output: stdout,
  terminal: true,
})

const runApp = async () => {
  rl.on('line', async (line) => {
    const query = line.toString().trim();
    const commandKeys = Object.keys(COMMANDS)
    let commandMatched = false;

    if (query === '') {
      return console.log('Please, enter the command ');
    }

    for (const key of commandKeys) {
      if (query === COMMANDS[key]) {
        try {
          const result = await COMMANDS_RUN[key]();
          stdout.write(`${result}\n`)
        } catch (error) {
          stdout.write(`Error executing command: ${error.message}\n`);
        }
        commandMatched = true;
        break;
      }
    }

    if(!commandMatched) {
      try {
        await execAsync(query);
      } catch (error) {
        stdout.write(`> Error executing command: ${error.message}\n`);
      }
    }
    rl.prompt('>');
  });

  rl.prompt('>');

  rl.on('SIGINT', () => {
    COMMANDS_RUN.EXIT();
  })
}

runApp();