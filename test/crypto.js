
const crypto = require('crypto');

const key = 'b54d2219de53861bbccd09134494637f';

const getCipher = (param) => {
  let res = param;
  if (param && param !== '') {
    const cipher = crypto.createCipher('aes192', key);
    res = cipher.update(param, 'utf8', 'hex');
    res += cipher.final('hex');
  }

  return res;
};

const decipher = (content) => {
  if (!content) return '';
  const _decipher = crypto.createDecipher('aes192', key);
  const res = _decipher.update(content, 'hex', 'utf8');
  const deciResult = res + _decipher.final('utf8');
  return deciResult;
}



console.log(getCipher('123'));

console.log(decipher('b1b4695b3f872d0d7afa144d9e753402'));

