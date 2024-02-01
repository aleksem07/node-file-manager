import os from 'os';
import path from 'path';

export const MAIN_DIR = path.join(process.env.PWD, '/src');
export const USER_NAME_SYSTEM = os.userInfo()['username'];
export const HOME_DIR = os.userInfo()['homedir'];

export const CURRENT_DIR = HOME_DIR;
export const WELCOME_MESSAGE = `You are currently in ${CURRENT_DIR}`
