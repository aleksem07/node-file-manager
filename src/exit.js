import { userName } from './userName.js';
const name = userName();
const stdout = process.stdout;

export const exit = () => {
  stdout.write(`\nThank you for using File Manager, ${name}, goodbye!\n`)
  process.exit();
}