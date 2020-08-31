# The mono repo for the [heartcode.app](https://heartcode.app)

## `api`

This module contains the api of the heartcode app powered by fastify. Command line tools 
used by students such as `heartcode deploy` is communicating with this endpoint.

## `serve`

This is the proxy of `heartcode.app` it will serve student deployment packages, 
route api and web requests. 

## `web`

This contains the website of [heartcode.app](https://heartcode.app) with course material,
instructions and material used for web dev.
