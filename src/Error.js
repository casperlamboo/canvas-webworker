export default class Error {
  constroctor(name) {
    this.name = name;
  }

  syntaxError(func, error) {
    throw `Uncaught SyntaxError: Failed to execute '${func}' on '${this.name}': ${error}.`
  }

  typeError(func, error) {
    throw `Uncaught TypeError: Failed to execute '${func}' on '${this.name}': ${error}.`
  }

  argumetsCheck(func, expected, actual) {
    if (actual < expected) {
      this.typeError('lineTo', `${expected} arguments required, but only ${actual} present`);
    }
  }
}
