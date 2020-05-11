# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

You will also need to install and setup mongodb for this app.

You will also need to seed your database, to seed the DB open a terminal in the addToCart-service directory and run the following command:
- node db/seed.js
After you get a message saying it has connect to MongoDB press CTRL + C. Your data should be in the DB now.


## HOW TO START
cd to addToCart-service directory
in multiple terminals run the following commands, one command per terminal:
- npm start
- npm run-script build
- (sudo) mongo or (sudo) mongod

