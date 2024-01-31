import { COMMANDS, COMMANDS_RUN } from './common/commands.js';
import readlinePromises from 'node:readline/promises';

const stdin = process.stdin;
const stdout = process.stdout;
const rl = readlinePromises.createInterface({
  input: stdin,
  output: stdout,
})

const runApp = async () => {
  rl.on('line', async (line) => {
    const query = line.toString().trim();
    const commandKeys = Object.keys(COMMANDS)

    let commandMatched = false;

    for (const key of commandKeys) {
      if (query === COMMANDS[key]) {
        try {
          const result = await COMMANDS_RUN[key]();
          stdout.write(`> ${result}\n`)
        } catch (error) {
          stdout.write(`> Error executing command: ${error.message}\n`);
        }
        commandMatched = true;
        break;
      }
    }

    if(!commandMatched) {
      stdout.write("> Please enter a valid command\n");
    }
  });

  rl.on('SIGINT', () => {
    COMMANDS_RUN.EXIT();
  })
}

runApp();