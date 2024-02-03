import os from 'os';
import path from 'path';
import fs from 'fs';

export const MAIN_DIR = path.join(process.env.PWD, '/src');
export const USER_NAME_SYSTEM = os.userInfo()['username'];
export const HOME_DIR = os.userInfo()['homedir'];
export const EOL = JSON.stringify(os.EOL);
export const ARCH = os.arch();

export const CURRENT_DIR = HOME_DIR;

const PROCESSORS =  os.cpus().map(i => JSON.stringify(i.model)).join('\n');
export const OSCPUS =  `Overall amount: ${os.cpus().length}\n${PROCESSORS}`

export const CAT = async (path = process.cwd()) => {
  try {
    const data = await fs.promises.readFile(path, 'utf-8')
    return data;
  } catch (err) {
    throw err;
  }
} 

export const CD = (path) => {
  process.chdir(path);
  return 'Directory changed';
}

export const UP = () => {
  if (process.cwd() === HOME_DIR) {
    process.chdir(HOME_DIR);
    return 'Already at home'  
  }  else {
    process.chdir('..');
    return 'Directory changed';
  }
} 

export const LS = async (path = process.cwd()) => {
  try {
    const files = await fs.promises.readdir(path);
    console.log(`\x1b[32mIndex:     Name:\x1b[0m`)
    return files.map((file ,index) => {
        console.log(`${index}         ${file}`)
      
    }).join('');
  } catch (err) {
    throw err;
  }
}

export const ADD = (fileName) => {
  try {
    fs.writeFile(`${path.join(process.cwd(), fileName)}`, '', (err) => {
      if (err) console.log(err.message);
    })
  } catch (err) {
    throw err;
  }
  if (!err) {
    'file added';
  }
}

export const RM = (path) => {
  try {
    fs.unlink(path, (err) => {
      if (err) console.log(err.message);
    })
  } catch (err) {
    throw err;
  }
    if (!err) {
    'file deleted';
  }
}

export const RN = (path) => {
  try {
    const [oldPath, newPath] = path.split(' ');
    fs.rename(oldPath, newPath, (err) => {
      if (err) console.log(err.message);
    })
  } catch (err) {
    throw err;
  }
    if (!err) {
    'file renamed';
  }
}
