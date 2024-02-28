const replace = require('replace-in-file')

const args = process.argv.slice(2)
const new_version = args[0]

const versionPattern = /"version"[:\s]+"[0-9\.]+"/gi

const options = {
  files: './public/manifest.json',
  from: versionPattern,
  to: `"version": "${new_version}"`,
}

replace.sync(options)
