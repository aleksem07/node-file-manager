import os from 'os';
import path, { join, basename } from 'path';
import fs, { createReadStream, createWriteStream, promises as fsPromises } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createHash } from 'crypto';

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
    const fileList = files.map((file) => ({ Name: file }));

    console.log('\x1b[32m');
    console.table(fileList);
    console.log('\x1b[0m');

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

export const CP = (path) => {
  const [oldPath, newPath] = path.split(' ');
  const fileName = basename(oldPath);
  const destinationPath = join(newPath, fileName);
  const readStream = createReadStream(oldPath);
  const writeStream = createWriteStream(destinationPath);

  readStream.pipe(writeStream);

  readStream.on('error', (err) => {
    console.error(`Error reading file: ${err.message}`);
  });

  writeStream.on('error', (err) => {
    console.error(`Error writing file: ${err.message}`);
  });

  writeStream.on('finish', () => {
    console.log('File copied successfully');
  });
};

export const MV = async (path) => {
  const [oldPath, newPath] = path.split(' ');
  try {
    const fileName = basename(oldPath);
    const destinationPath = join(newPath, fileName);
    
    await fsPromises.rename(oldPath, destinationPath);
  } catch (err) {
    throw err;
  }
}

export const COMPRESS = async (path) => {
  try {
    const [sourcePath, destinationDirectory] = path.split(' ');
    const fileName = basename(sourcePath);
    const destinationPath = join(destinationDirectory, `${fileName}.br`);

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);
    const brotliCompressStream = createBrotliCompress();

    readStream.on('error', (err) => {
      console.error(`Error reading file: ${err.message}`);
      writeStream.end();
    });

    writeStream.on('error', (err) => {
      console.error(`Error writing compressed file: ${err.message}`);
    });

    writeStream.on('finish', () => {
      console.log('File compressed successfully');
    });

    await new Promise((resolve, reject) => {
      readStream.pipe(brotliCompressStream).pipe(writeStream);
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

  } catch (err) {
    throw err;
  }
};

export const DECOMPRESS = async (path) => {
  try {
    const [sourcePath, destinationDirectory] = path.split(' ');
    const isBr = basename(sourcePath);
    if (!isBr.endsWith('.br')) return 'Please, provide a .br file' 
    const fileName = basename(sourcePath, '.br');
    const destinationPath = join(destinationDirectory, fileName);

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);

    readStream.on('error', (err) => {
      console.error(`Error reading compressed file: ${err.message}`);
      writeStream.end();
    });

    writeStream.on('error', (err) => {
      console.error(`Error writing decompressed file: ${err.message}`);
    });

    writeStream.on('finish', () => {
      console.log('File decompressed successfully');
    });

    await new Promise((resolve, reject) => {
      readStream.pipe(createBrotliDecompress()).pipe(writeStream);
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

  } catch (err) {
    throw err;
  }
}

export const HASH = async (path) => {
  try {
    const hash = createHash('sha256').update(await fsPromises.readFile(path)).digest('hex');
    return hash;
  } catch (err) {
    throw err;
  }
}