export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/angularowl.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.angularowl',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/material': 'ng.material'
  }
}
