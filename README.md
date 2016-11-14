# Bower Components

[![Discord chat](https://img.shields.io/badge/discord-join%20chat%20%E2%86%92-brightgreen.svg?style=flat)](https://discord.gg/yJtVBnp)

> Bower needs your help (**yes, really**). If you're willing to help, please [donate](https://salt.bountysource.com/teams/bower) or contribute.

This repository contains a list of Bower components and their metadata (currently only url of main repository).

Please read [this issue](https://github.com/bower/bower/issues/2388) for reasoning and discussion.

All components reside in the `/packages` directory, each of them with the following structure:

```js
{
  // REQUIRED: Name of package (needed to maintain backward compatibility with old registry)
  "name": "jquery",
  // REQUIRED: Repository URL that Bower should use to resolve package
  "url": "https://github.com/jquery/jquery-dist.git"
}
```

We will consider adding extra metadata fields in the future. If you have an idea, please [open an issue](https://github.com/bower/components/issues)

## Usage

The registry is tagged, starting with `1.0.0` which reflects the state of the old registry at the time it was frozen. You can use this tag as a starting point, and gradually "bump" the registry tag in `.bowerrc`, at the same time ensuring projects still work. Please see *Migration* section to see how you can point your Bower to the new registry.

We **highly discourage** using `master` tag of this repository, as it can change in breaking ways at any time. Instead, please choose an appropriate tag from [available releases](https://github.com/bower/components/releases), and set the registry url as follows:

```js
{
  "registry": "https://raw.githubusercontent.com/bower/components/x.x.x"
}
```

## Migration

The structure of this repository matches the API of the old registry. Also, `1.0.0` tag reflects its frozen state. It means you can (and should) seamlessly migrate by creating or updating your `.bowerrc` file (either in project's directory or home directory):

```json
{
  "registry": "https://raw.githubusercontent.com/bower/components/1.0.0"
}
```

**At some point we will turn off the old registry, so please make this change as soon as possible**. Switching bower to the the `1.0.0` tag of new registry should be 100% backwards-compatible, even for old Bower clients.

If you also want to preserve search / register / unregister functionality (please mind, it might be deprecated):

```json
{
  "registry": {
    "default": "https://raw.githubusercontent.com/bower/components/1.0.0",
    "search": "https://bower.herokuapp.com",
    "register": "https://bower.herokuapp.com",
    "publish": "https://bower.herokuapp.com"
  }
}
```

## Modifying registry

We opt-out of changing entries in the `/packages` folder directly. Instead, we encourage contributors to create migration scripts in `/migrations` directory that update packages appropriately. Pull Requests proposing these migrations shoudn't include any changes in the `/packages` directory. Only Maintainers of Bower Components are responsible for reviewing migrations, and running them periodically.

Respository uses [semver](http://semver.org/) for tagging, and uses the same nomenclature for migrations:

- *major* migrations can break bower client, running them results in major semver bump
- *minor* migrations are 100% backward-compatible, and add extra stuff, they result in minor semver bump

**Currently the registry contains mixed-cased packages like `jquery` and `jQuery`, so you need to develop this repository on a  case-sensitive filesystem. This excludes default OSX and Windows installations. Ubuntu is OK.**

## Private registry

You can fork this registry and point Bower to it instead, like so:

```json
{
  "registry": "https://raw.githubusercontent.com/sheerun/components/1.0.0"
}
```

Please [e-mail us](email:team@bower.io) if you're interested in private registry in non-public repository.

## License

MIT
