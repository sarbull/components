var axios = require('axios')
var utils = require('./index')

exports.up = function(next) {
  axios.get('https://bower.herokuapp.com/packages').then(function (result) {
    var packages = result.data

    packages.forEach(function (pkg) {
      utils.write(pkg)
    })

    next()
  })
}
