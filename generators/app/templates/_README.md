# <%= name %>
> <%= description %>

<% if (username) { %>
[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
<% } %>
## Installation

First, install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
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
 * Documentation on [AngularNG](https://github.com/yadickson/generator-angularng).

<% if (license) { %>
## License

<%= license %><% if (username) { %> © [<%= author %>](https://github.com/<%= username %>)<% } %>
<% } %>
<% if (username) { %>
[travis-image]: https://travis-ci.org/<%= username %>/<%= name %>.svg
[travis-url]: https://travis-ci.org/<%= username %>/<%= name %>

[coveralls-image]: https://coveralls.io/repos/github/<%= username %>/<%= name %>/badge.svg
[coveralls-url]: https://coveralls.io/github/<%= username %>/<%= name %>

[dependencies-image]: https://david-dm.org/<%= username %>/<%= name %>/status.svg
[dependencies-url]: https://david-dm.org/<%= username %>/<%= name %>?view=list

[dev-dependencies-image]: https://david-dm.org/<%= username %>/<%= name %>/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/<%= username %>/<%= name %>?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/<%= name %>/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/<%= name %>
<% } %>