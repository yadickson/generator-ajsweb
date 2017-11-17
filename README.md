# generator-ajsweb
> Yeoman Gulp generator for AngularJS Web Application

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ajsweb using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

Simply run a global install using your terminal and you're good to go!

```bash
npm install -g yo generator-ajsweb
```

## List generators

```bash
yo --generators
```

## Make project

Help

```bash
yo ajsweb --help
```

Then generate your new project:

```bash
yo ajsweb
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## Usage

Make a new directory, and `cd` into it:

```
mkdir project && cd project
```

Run `yo ajsweb`, optionally passing an app name:
```
yo ajsweb [project-name]
```
## Build develop mode

Make build directory with full application

```
gulp build
```

## Dist production mode

Make dist directory with minimal application for production

```
gulp dist
```

## Preview

Build preview (only for develop)

```
gulp serve
```

Dist preview (only for production)

```
gulp serve:dist
```

## Test

> Console

```
gulp test
```

> Coverage

```
Check coverage directory
```

> Preview

```
gulp serve:test
```

## Clean

```
gulp clean
```

## Docs

```
gulp docs
```

## Generators

Available generators:

* [ajsweb](#app) (aka [ajsweb:app](#app))
* [ajsweb:route](#route)
* [ajsweb:controller](#controller)
* [ajsweb:view](#view)
* [ajsweb:directive](#directive)
* [ajsweb:filter](#filter)
* [ajsweb:service](#service)
* [ajsweb:provider](#provider)
* [ajsweb:factory](#factory)
* [ajsweb:value](#value)
* [ajsweb:constant](#constant)
* [ajsweb:decorator](#decorator)
* [ajsweb:component](#component)


### App
Sets up a new AngularJS app, generating all the boilerplate you need to get started. The app generator also optionally installs Bootstrap and additional AngularJS modules, such as angular-ui-router (installed by default).

Example:
```bash
yo ajsweb --help
yo ajsweb project
```

### Route
Generates a controller and view, and configures a route in `app/scripts/main_cfg.js` connecting them.

Example:
```bash
yo ajsweb:route --help
yo ajsweb:route route-name
```

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo ajsweb:controller --help
yo ajsweb:controller controller-name
```

### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo ajsweb:view --help
yo ajsweb:view view-name
```

### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo ajsweb:directive --help
yo ajsweb:directive directive-name
```

### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo ajsweb:filter --help
yo ajsweb:filter filter-name
```

### Service
Generates an AngularJS service in `app/scripts/services`.

Example:
```bash
yo ajsweb:service --help
yo ajsweb:service service-name
```

### Provider
Generates an AngularJS provider in `app/scripts/services`.

Example:
```bash
yo ajsweb:provider --help
yo ajsweb:provider provider-name
```

### Factory
Generates an AngularJS factory in `app/scripts/services`.

Example:
```bash
yo ajsweb:factory --help
yo ajsweb:factory factory-name
```

### Value
Generates an AngularJS value in `app/scripts/services`.

Example:
```bash
yo ajsweb:value --help
yo ajsweb:value value-name
```

### Constant
Generates an AngularJS constant in `app/scripts/services`.

Example:
```bash
yo ajsweb:constant --help
yo ajsweb:constant constant-name
```

### Decorator
Generates an AngularJS service decorator in `app/scripts/decorators`.

Example:
```bash
yo ajsweb:decorator --help
yo ajsweb:decorator service-name
```

### Component
Generates an AngularJS component in `app/scripts/components`.

Example:
```bash
yo ajsweb:component --help
yo ajsweb:component component-name
```

## License

GPL-3.0 © [Yadickson Soto](https://github.com/yadickson)


[travis-image]: https://travis-ci.org/yadickson/generator-ajsweb.svg
[travis-url]: https://travis-ci.org/yadickson/generator-ajsweb

[coveralls-image]: https://coveralls.io/repos/github/yadickson/generator-ajsweb/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/generator-ajsweb

[dependencies-image]: https://david-dm.org/yadickson/generator-ajsweb/status.svg
[dependencies-url]: https://david-dm.org/yadickson/generator-ajsweb?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/generator-ajsweb/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/generator-ajsweb?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/generator-ajsweb/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/generator-ajsweb

[npm-image]: https://badge.fury.io/js/generator-ajsweb.svg
[npm-url]: https://badge.fury.io/js/generator-ajsweb
