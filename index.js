var Renderer = require('docsify-server-renderer')
var readFileSync = require('fs').readFileSync

// init
var renderer = new Renderer({
  template: readFileSync('./ssr.index.html', 'utf-8'),
  config: {
    basePath: 'https://colinmaudry.github.io/password-management/',

name: 'password-management',
      repo: 'ColinMaudry/password-management',
      loadSidebar: true,
      autoHeader: true,
      auto2top: true,
      formatUpdated: '{DD}/{MM}/{YYYY} {HH}:{mm}',
      notFoundPage: true,


    executeScript: true,
    loadSidebar: true,
    maxLevel: 4,
    subMaxLevel: 2
      }
})

renderer.renderToString(url)
  .then(html => {})
  .catch(err => {})
