
# CoffeeLint Configuration

Configuration for CoffeeLint

[![NPM](https://img.shields.io/npm/dt/@dopustim/coffeelint-config?style=flat-square)](https://www.npmjs.com/package/@dopustim/coffeelint-config)

## Features

- Provide Errors and Warnings
- 4 spaces for indentation (warning)
- 90 symbols per line (warning)
- Unix linebreaks (warning)

## Usage

Install `@coffeelint/cli` and `@dopustim/coffeelint-config` packages via [NPM](https://www.npmjs.com):

```sh
npm install -D @coffeelint/cli @dopustim/coffeelint-config
```

Extend this config in your `.coffeelintrc.json`:

```json
{
    "extends": "@dopustim/coffeelint-config"
}
```

Or use your `package.json`:

```json
"coffeelintConfig": {
    "extends": "@dopustim/coffeelint-config"
}
```

You can also reassign any rule for your needs:

```json
{
    "extends": "@dopustim/coffeelint-config",
    "max_line_length": { "value": 100, "limitComments": true, "level": "warn" }
}
```

## About

Visit the [CoffeeLint website](https://coffeelint.github.io) to find out all rules and descriptions.
