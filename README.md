# generator-angularng
> Yeoman Gulp generator for AngularJS 

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]

## Installation

First, install [Yeoman](http://yeoman.io) and generator-angularng using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angularng
```

Then generate your new project:

```bash
yo angularng
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

Run `yo angularng`, optionally passing an app name:
```
yo angularng [project-name]
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

## Generators

Available generators:

* [angularng](#app) (aka [angularng:app](#app))
* [angularng:controller](#controller)
* [angularng:view](#view)

Unavailable generators:

* [angularng:route](#route)
* [angularng:directive](#directive)
* [angularng:filter](#filter)
* [angularng:service](#service)
* [angularng:provider](#provider)
* [angularng:factory](#factory)
* [angularng:value](#value)
* [angularng:constant](#constant)
* [angularng:decorator](#decorator)
* [angularng:component](#component)


### App
Sets up a new AngularJS app, generating all the boilerplate you need to get started. The app generator also optionally installs Bootstrap and additional AngularJS modules, such as angular-ui-router (installed by default).

Example:
```bash
yo angularng
```

### Route
Generates a controller and view, and configures a route in `app/scripts/main_cfg.js` connecting them.

Example:
```bash
yo angularng:route route-name
```

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo angularng:controller controller-name
```

### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo angularng:view view-name
```

### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo angularng:directive directive-name
```

### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo angularng:filter filter-name
```

### Service
Generates an AngularJS service in `app/scripts/services`.

Example:
```bash
yo angularng:service service-name
```

### Provider
Generates an AngularJS provider in `app/scripts/services`.

Example:
```bash
yo angularng:provider provider-name
```

### Factory
Generates an AngularJS factory in `app/scripts/services`.

Example:
```bash
yo angularng:factory factory-name
```

### Value
Generates an AngularJS value in `app/scripts/services`.

Example:
```bash
yo angularng:value value-name
```

### Constant
Generates an AngularJS constant in `app/scripts/services`.

Example:
```bash
yo angularng:constant constant-name
```

### Decorator
Generates an AngularJS service decorator in `app/scripts/decorators`.

Example:
```bash
yo angularng:decorator service-name
```

### Component
Generates an AngularJS component in `app/scripts/components`.

Example:
```bash
yo angularng:component component-name
```

## License

GPL-3.0 © [Yadickson Soto](https://github.com/yadickson)


[travis-image]: https://travis-ci.org/yadickson/generator-angularng.svg
[travis-url]: https://travis-ci.org/yadickson/generator-angularng

[coveralls-image]: https://coveralls.io/repos/github/yadickson/generator-angularng/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/generator-angularng

[dependencies-image]: https://david-dm.org/yadickson/generator-angularng/status.svg
[dependencies-url]: https://david-dm.org/yadickson/generator-angularng?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/generator-angularng/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/generator-angularng?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/generator-angularng/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/generator-angularng

[npm-image]: https://badge.fury.io/js/generator-angularng.svg
[npm-url]: https://badge.fury.io/js/generator-angularng
