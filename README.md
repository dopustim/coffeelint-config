
# @dopustim/coffeelint-config

Configuration file for CoffeeLint

[![NPM](https://img.shields.io/npm/dt/@dopustim/coffeelint-config.svg?style=flat-square)](https://www.npmjs.com/package/@dopustim/coffeelint-config)

[![GitHub tag](https://img.shields.io/github/tag/dopustim/coffeelint-config.svg?style=flat-square)](https://github.com/dopustim/coffeelint-config/tags)
[![GitHub stars](https://img.shields.io/github/stars/dopustim/coffeelint-config.svg?style=flat-square)](https://github.com/dopustim/coffeelint-config/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/dopustim/coffeelint-config.svg?style=flat-square)](https://github.com/dopustim/coffeelint-config/issues)

[![License](https://img.shields.io/badge/license-ISC-green.svg?style=flat-square)](/LICENSE.md)

## Features

- Provide Errors and Warnings
- 4 spaces for indentation (warning)
- 100 symbols per line (warning)
- Unix linebreaks (warning)

## Usage

Install `@dopustim/coffeelint-config` package via [NPM](https://www.npmjs.com/package/@dopustim/coffeelint-config):

```sh
$ npm i -D coffeelint @dopustim/coffeelint-config
```

Extend this config in your `coffeelint.json`:

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
    "rules": {
        "space_operators": {
            "level": "ignore"
        }
    }
}
```

## Rules

You can find all rules on [official site](http://www.coffeelint.org/#options).

## License

[ISC License](./LICENSE.md) © 2018 Dopustim Vladimir
