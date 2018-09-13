export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/my-component.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.my-component',
  globals: {
    '@angular/core': 'ng.core'
  }
}