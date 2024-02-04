export const exit = (name) => {
  console.log('\x1b[35m \x1b[0m')
  process.stdout.write(`\nThank you for using File Manager, \x1b[36m${name}\x1b[0m, goodbye!\n`)
  process.exit(0);
}