# Elasticsearch Index Manager

An attempt to learn React Redux and Webpack by building something useful.

Forked from [todo-redux-react-webpack](https://github.com/sadams/todo-redux-react-webpack).

## Deps

    npm install

## Build

    node_modules/.bin/webpack

## Dev

    node_modules/.bin/webpack-dev-server --hot --inline

The application should be visible on http://localhost:8080

## Docker

```
docker build -t local/elasticsearch-index-manager .
docker run -p 8080:8080 --name elasticsearch-index-manager -d local/elasticsearch-index-manager
```

```
docker rm -f elasticsearch-index-manager
```

