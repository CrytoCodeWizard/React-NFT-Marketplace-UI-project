const fs = require('fs')

module.exports.removeTsConfig = () => {
  fs.readFile('./.eslintrc', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    const result = data.toString().replace('"tsconfigRootDir": "./design-system"', '"tsconfigRootDir": ""')
    fs.writeFile('./.eslintrc', result, 'utf8', (err) => {
      if (err) {
        console.log(err)
        return
      }
    })
  })
}

module.exports.addTsConfig = () => {
  fs.readFile('./.eslintrc', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    const result = data.toString().replace('"tsconfigRootDir": ""', '"tsconfigRootDir": "./design-system"')
    fs.writeFile('./.eslintrc', result, 'utf8', (err) => {
      if (err) {
        console.log(err)
        return
      }
    })
  })
}
