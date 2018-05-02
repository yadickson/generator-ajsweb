# <%= name %>
> <%= description %>

<% if (username) { %>
[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
<% } %>

This application use AngularJS, Bootstrap and Html5

## Prebuild application

```bash
yarn install && yarn upgrade
```

## Build project

```bash
gulp build
```

## Dist project

```bash
gulp dist

```

## Test project

```bash
gulp test
```

## Docs project

```bash
gulp docs
```

## Clean project

```bash
gulp clean
```

## Run develop application on browser

```bash
gulp serve
```

## Run production application on browser

```bash
gulp serve:dist
```

## Test application on browser

```bash
gulp serve:test
```

## Documentation application on browser

```bash
gulp serve:docs
```

## Help

```bash
gulp help
```

## Thanks

 * Build application with [AngularJS Web](https://github.com/yadickson/generator-ajsweb#readme).

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
<% } %>
