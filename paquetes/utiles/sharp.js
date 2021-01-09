const sharp = require('sharp');

sharp('imagen.png')
    .resize(80)
    .grayscale()
    .toFile('risized.png')