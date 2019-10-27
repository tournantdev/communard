# @tournant/scaffold

👾 CLI tool to quickly scaffold new Tournant UI components.

---

## Acknowledgement

Based on the article [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js) by Dominik Kundel.

## Purpose

This package reduces manual work in setting up new components in the [Tournant UI](https://github.com/tournantdev/ui) repository.

The script will take a component name as its input and creates all folders and files needed to develop it.

## Usage

Install the package:

```
yarn add @tournant/scaffold
```

### Args

You can set `name`, `version` and `description` via command line arguments. Example:

```
scaffold --name rainbow-button --version 0.2.0 --description A rainbowy button
```

#### Aliases

`--name` is aliased to `-n`, `--version` to `-v` and `--description` to `-d`.

### Prompts

If all (or some) arguments were not given, `scaffold` will prompt you for the missing information.

### cwd

It is important to run the script in the repository root due to `path.resolve()` calls during the scaffolding phase.

### Validation

Regardless if via argument or prompt, the script will assert if the package name can be used on NPM and if the given version number adheres to the semantic version format.
