import { COMMANDS, COMMANDS_RUN } from './common/commands.js';
import readlinePromises from 'node:readline/promises';
import { execAsync } from './util/exec.js';
import { getCurrentDir } from './util/current-dir.js';
import { HOME_DIR } from './common/const.js';

const stdin = process.stdin;
const stdout = process.stdout;
const rl = readlinePromises.createInterface({
  input:  stdin,
  output: stdout,
  terminal: true,
})

const startProjectPath = () => {
  process.chdir(HOME_DIR);
}
startProjectPath();

const addCursor = () => {
  console.log(`\n${getCurrentDir(process.cwd())} \x1b[33m\nEnter the command...\x1b[1m`)
  rl.prompt(true);
}

const runApp = async () => {
  rl.on('line', async (line) => {
    const query = line.toString().trim();
    let queryKey = query.split(' ')[0];
    const queryAdd = query.split(' ').slice(1).join(' ');
    if (queryAdd.startsWith('--')) queryKey = query;
    const commandKeys = Object.keys(COMMANDS)
    let commandMatched = false;

    for (const key of commandKeys) {
      if (queryKey === COMMANDS[key]) {
        try {
          const result = await COMMANDS_RUN[key](queryAdd || '');
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
    addCursor();
  });
  
  addCursor();

  rl.on('SIGINT', () => {
    COMMANDS_RUN.EXIT();
  })
}

runApp();