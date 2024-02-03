import { exit } from '../util/exit.js';
import { userName } from '../util/user-name.js';
import { HOME_DIR, OSCPUS, EOL, USER_NAME_SYSTEM, ARCH, CAT, CD, UP, LS, ADD, RM, RN, CP, MV, COMPRESS, DECOMPRESS, HASH } from './const.js';

export const COMMANDS = {
  HELP: '.help',
  EXIT: '.exit',
  PWD: 'pwd',
  ERROR: '.error',
  UP: 'up',
  CD: 'cd',
  LS: 'ls',
  CAT: 'cat',
  ADD: 'add',
  RN: 'rn',
  CP: 'cp',
  MV: 'mv',
  RM: 'rm',
  OSEOL: 'os --EOL',
  OSCPUS: 'os --cpus',
  OSHOMEDIR: 'os --homedir',
  OSUSERNAME: 'os --username',
  OSARCHITECTURE: 'os --architecture',
  HASH: 'hash',
  COMPRESS: 'compress',
  DECOMPRESS: 'decompress',
}

export const COMMANDS_RUN = {
  HELP: () => 'run .help',
  EXIT: () => exit(userName()),
  PWD: () => process.env.PWD,
  ERROR: async () => {
    throw new Error('This is a simulated error');
  },
  CD: (path) => CD(path),
  UP: () => UP(),
  LS: (path) => path ? LS(path) : LS(process.cwd()),
  CAT: (path) => CAT(path),
  ADD: (fileName) => ADD(fileName),
  RN: (path) => RN(path),
  CP: (path) => CP(path),
  MV: (path) => MV(path),
  RM: (path) => RM(path),
  OSEOL: () =>  EOL,
  OSCPUS: () =>  OSCPUS,
  OSHOMEDIR: () => HOME_DIR,
  OSUSERNAME: () =>  USER_NAME_SYSTEM,
  OSARCHITECTURE: () =>  ARCH,
  HASH: (path) =>  HASH(path),
  COMPRESS: (path) => COMPRESS(path),
  DECOMPRESS: (path) => DECOMPRESS(path),
}

export const COMMANDS_HELP = {
  HELP: '.help -',
  EXIT: '.exit -',
  PWD: 'pwd -',
  HOME_DIR: 'homedir -',
  ERROR: '.error - simulated new Error',
}

