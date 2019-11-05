# @tournant/communard

👾 CLI tool to quickly scaffold new Tournant UI components.

---

## Acknowledgement

Based on the article [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js) by Dominik Kundel.

## Purpose

This package reduces manual work in setting up new components in the [Tournant UI](https://github.com/tournantdev/ui) repository.

The script will take a component name as its input. It will then create the necessary folders and some barebones files that are needed to develop components.

### The name

The name is, as is the name of the org owning the package, borrowed from the organsitional form of the professinal kitchen, the _Brigade de Cuisine_. In this brigade, the _communard_ is the chef cooking meals for the others chefs.

## Usage

Install the package:

```
yarn add @tournant/communard
```

### Args

You can set `name`, `version` and `description` via command line arguments. Example:

```
communard --name rainbow-button --version 0.2.0 --description A rainbowy button
```

#### Aliases

`--name` is aliased to `-n`, `--version` to `-v` and `--description` to `-d`.

### Prompts

If all (or some) arguments were not given, `communard` will prompt you for the missing information.

### cwd

It is important to run the script in the repository root due to `path.resolve()` calls during the scaffolding phase.

### Validation

Regardless if via argument or prompt, the script will assert if the package name can be used on NPM and if the given version number adheres to the semantic version format.
