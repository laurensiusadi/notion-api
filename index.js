const Notion = require('./src/notion');

const options = {
  token_v2: '',
};

const api = new Notion({
  token: options.token_v2,
  options: {
    pageUrl: '/posts/',
    colors: {
      red: 'tomato',
      blue: 'rgb(100, 149, 237)',
      purple: '#9933cc',
    },
  },
});

// Use the api here
