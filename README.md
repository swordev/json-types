# json-types

> A repository of JSON types automatically generated from a JSON schema.

[![workflow-badge]](https://github.com/swordev/json-types/actions/workflows/ci.yaml) [![license-badge]](https://github.com/swordev/json-types#license)

[workflow-badge]: https://img.shields.io/github/actions/workflow/status/swordev/json-types/ci.yaml?branch=main
[license-badge]: https://img.shields.io/github/license/swordev/json-types

## Usage

Review the readme file for published [packages](https://github.com/swordev/json-types/tree/main/packages).

## Development

### Requirements

- [Node.js v20](https://nodejs.org)
- [pnpm v8](https://pnpm.io)

### Installation

```sh
git clone https://github.com/swordev/json-types
cd json-types
```

Add the type to the [catalog.json](https://github.com/swordev/json-types/blob/main/catalog.json) file and generate the package:

```sh
pnpm types:gen
```

## License

Distributed under the MIT License.
