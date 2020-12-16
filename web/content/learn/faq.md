---
title: FAQ
description: 'Frequently asked questions, CMD/CTRL + F this page to find answer to common problems.'
---

# Frequently Asked Questions

Find commonly asked questions you have about development, deployment and course content.
You can use `CMD/CTRL + F` on this page to quickly find the questions you have. 

## Setup instructions

You can check out [setup installation](/learn/setup-installation); a detailed write up of 
the steps required to install VS Code, Node.js and the web dev project is written there.

## Setup Issues: Path already exists

```shell
$ npm init heartcode-web-dev
npx: installed 102 in ..

create-heartcode-web-dev v0.4.3  
Can't create heartcode-web-dev because there's already a non empty directory heartcode-web-dev existing in path.
```

* You need to delete the directory and re-run `npm init heartcode-web-dev`.
* You can use `rmdir heartcode-web-dev \s` to delete the directory in Windows.

## Setup Issues: Unexpected end of JSON input while parsing near '...'

* If you faced this error, most likely your cache is corrupted.
* You can clear your cache by running this command.

```shell
npm cache clean --force
```

## How do I set up the project?
```shell
npm init heartcode-web-dev
```

If you are using a Windows computer, there might be some issues with the cache if your PC
name contains a space. You can check out this [Stackoverflow article](https://stackoverflow.com/questions/59405152)
for more information.

## How do run the project?

> Why is my project not running?

```shell
# cd heartcode-web-dev
npm run dev
```

## How do I deploy?
```shell
# cd heartcode-web-dev
npm run deploy
```

## Why is my deployed website not updating?

The website might be cached, you should do a hard refresh.

- `CTRL + F5` for Windows users.
- `CMD + SHIFT + R` for Mac users.


## How do I install code highlight?

[Vetur Plugin](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## VS Code Live Share

[Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
enables your team to quickly collaborate on the same codebase without the need 
to synchronize code or to configure the same development tools, settings, or environment.

## What are the list of reserved keywords in js, nuxt and vue?

> The words that you cannot use.

- `<n-link>`, `<nuxt-link>`, `<router-link>`
- `<client-only>`, `<no-ssr>`
- `<nuxt>`, `<nuxt-child>`
- `<slot>`, `<template>`
- `delete`
