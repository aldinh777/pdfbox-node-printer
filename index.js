const path = require('path')
const nodeJre = require('node-jre')

function printPDF(filename) {
  const pdfbox = nodeJre.spawn([], '-jar', [path.join(__dirname, 'pdfbox.jar'), 'PrintPDF', filename, '-silentPrint'])

  pdfbox.stdout.on('data', (data) => {
    console.log(data.toString())
  })
  
  pdfbox.stderr.on('data', (data) => {
    console.log(data.toString())
  })  
}

module.exports = printPDF
