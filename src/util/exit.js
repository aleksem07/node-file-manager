export const exit = (name) => {
  process.stdout.write(`\nThank you for using File Manager, ${name}, goodbye!\n`)
  process.exit();
}