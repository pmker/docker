module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html', 'cypress', 'mocha'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow functions declarations without space befor the parens
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-trailing-spaces': 0
  },
  env: {
    'cypress/globals': true
  },
  globals: {
    window: false,
    localStorage: false,
    $: false,
    JSON: false
  }
}
