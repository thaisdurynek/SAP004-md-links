/* eslint-disable */
const mdLinks = require('../cli.js');
const path = './test/tests.md';
const validate = require('../public/validate.js');
//const stats = require('../public/stats.js');

const mock = [{
  href: 'https://pt.wikipedia.org/wiki/Markdown',
  text: 'Markdown',
  file: './test.md',
}];

const mockValidate = [  
  {
    href: 'https://pt.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: './test/tests.md',
    statusText: 'OK',
    status: 200
  }
];

const mockStats = { total: 1, unique: 1 };

const mockValidateAndStats = { total: 1, unique: 1, broken: 0 };

describe('Retorno da função mdLinks', () => {
  it('É uma função', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Retorno do array sem options', () => {
    return mdLinks(path).then((response) => {
      expect(response).toBe(mock);
    });
  });
  it('Retorno do array validate', () => {
    return mdLinks(path, '--validate').then((response) => {
      expect(response).toBe(mockValidate);
    });
    // return expect(valid.validate(mock)).resolves.toBe(mockValidate);
  });
  it('Retorno do array stats', () => {
    return mdLinks(path, '--stats').then((response) => {
      expect(response).toBe(mockStats);
    });
  });
  it('Retorno do array validate and stats', () => {
    return mdLinks(path, ['--stats', '--validate']).then((response) => {
      expect(response).toBe(mockValidateAndStats);
    });
  });
});

describe('Retorno da função mdLinks', () => {
  it('É uma função', () => {
    expect(typeof validate).toBe('function');
  });
  it('Retorno do array validate', () => {
    return validate(mock).then((response) => {
      expect(response).toBe(mockValidate);
    });
    // return expect(valid.validate(mock)).resolves.toBe(mockValidate);
  });
});