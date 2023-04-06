# EACCESS error when using globby despite `suppressErrors: true`

To reproduce:

```sh
# Install dependencies.
$ npm install

# Create a "foo" directory (listed in .gitignore).
$ mkdir foo

# Make it non-readable.
$ chmod a-rx foo

# Run index.js
$ node index.js
```

Note: this only occurs when `gitignore` is set to `true`.
