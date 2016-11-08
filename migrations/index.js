var fs = require('fs')
var path = require('path')

function write(pkg) {
  fs.writeFileSync(
    path.resolve(__dirname, '../', 'packages', pkg.name),
    JSON.stringify(pkg, null, 2) + '\n'
  )
}

module.exports = {
  write: write
}
