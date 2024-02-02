import os from 'os';
import path from 'path';

export const MAIN_DIR = path.join(process.env.PWD, '/src');
export const USER_NAME_SYSTEM = os.userInfo()['username'];
export const HOME_DIR = os.userInfo()['homedir'];
export const EOL = JSON.stringify(os.EOL);
export const ARCH = os.arch();

export const CURRENT_DIR = HOME_DIR;

const PROCESSORS =  os.cpus().map(i => JSON.stringify(i.model)).join('\n');
export const OSCPUS =  `Overall amount: ${os.cpus().length}\n${PROCESSORS}`
