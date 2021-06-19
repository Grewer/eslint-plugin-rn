# eslint-plugin-rn

rn eslint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@grewer/eslint-plugin-rn`:

```
$ npm install @grewer/eslint-plugin-rn --save-dev
```


## Usage

Add `@grewer/rn` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@grewer/rn"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@grewer/rn/no-inner-style": 1
    }
}
```

## Supported Rules

* Fill in provided rules here





