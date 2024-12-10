const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
  env: {
    GITHUB_USERNAME: 'seu-usuario-aqui',
    GITHUB_PASSWORD: 'sua-senha-aqui',
  },
});
