const welcome = async () => {
  const argv = process.argv.slice(2);
  const names = argv.toString().split(/\,|username\=|--/).filter(item => item !== '');
  const userName = names[1] ? names[1] : names[0];
  
  if (userName) {
    process.stdout.write(`Welcome to the File Manager, ${userName.toString()}!`);
    process.stdout.write('\n')
  } else {
    process.stdout.write(`Welcome to the File Manager, Student1!`);
    process.stdout.write('\n')
  }
}

welcome();