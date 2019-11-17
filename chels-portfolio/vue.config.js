// vue.config.js
module.exports = {
    pages: {
        'index': {
          entry: './src/pages/Home/main.js',
          template: 'public/index.html',
          title: 'Home'
          //chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
        },
        'about': {
          entry: './src/pages/About/main.js',
          template: 'public/index.html',
          title: 'About'
          //chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
        }
        ,'now': {
            entry: './src/pages/Now/main.js',
            template: 'public/index.html',
            title: 'Now'
            //chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
          }, 
          'work': {
            entry: './src/pages/Work/main.js',
            template: 'public/index.html',
            title: 'Work'
            //chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
          },
          'contact': {
            entry: './src/pages/Contact/main.js',
            template: 'public/index.html',
            title: 'Contact'
            //chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
          }
      }
}