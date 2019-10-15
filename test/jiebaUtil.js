const jieba = require('nodejieba')

const content = jieba.cut('要好好学习，天天向上');
console.log('content', content);

const c  = `要好好学习，天天向上`;
const re = jieba.extract(c, 1);

console.log('re', re);


const res1 = jieba.cutHMM(c);
console.log('res1', res1);
const res2 = jieba.insertWord('哈哈哈');
console.log('res2', res2);
const res3 = jieba.cutAll(c);
console.log('res3', res3);
const res4 = jieba.cutForSearch(c);
console.log('res4', res4);
const res5 = jieba.cutSmall(c);
console.log('ress5', res5);
const res6 = jieba.tag(c);
console.log('res6', res6);
console.log(jieba.extractWithWords(jieba.tagWordsToStr(res6), 2));
console.log(jieba.textRankExtract(c), 2);
console.log(jieba.textRankExtractWithWords(jieba.tagWordsToStr(c), 2));
console.log(jieba.cut('岁岁平安'));
