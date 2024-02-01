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

    for (const key of commandKeys) {
      if (query === COMMANDS[key]) {
        try {
          const result = await COMMANDS_RUN[key]();
          console.log('\x1b[35m \x1b[0m')
          stdout.write(`${result}\n`)
        } catch (error) {
          stdout.write(`Invalid input: ${error.message}\n`);
        }
        commandMatched = true;
        break;
      }
    }

    if(!commandMatched) {
      try {
        await execAsync(query);
      } catch (error) {
        stdout.write(`\x1b[31mInvalid input: \x1b[0m${error.message}\n`);
      }
    }
    console.log('\x1b[33m \x1b[1m')
    rl.prompt(true);
  });

  console.log('\x1b[33m \x1b[1m')
  rl.prompt(true);

  rl.on('SIGINT', () => {
    COMMANDS_RUN.EXIT();
  })
}

runApp();