const Sequelize = require('sequelize');
const sequelize = new Sequelize('ys', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // 仅限 SQLite
//   storage: 'path/to/database.sqlite',

  // 请参考 Querying - 查询 操作符 章节
  operatorsAliases: false
});
sequelize.authenticate().then(() => {
    console.log("连接成功");
  }).catch(err => {
    console.error('数据库连接失败：', err);
  });

// const Project = sequelize.define('Project', {
//   name: Sequelize.STRING,
//   age: Sequelize.INTEGER,
//   sex: Sequelize.STRING,
// });

// sequelize.sync()
//   .then(() => Project.create({
//     name: 'aa',
//     age: 11,
//     sex: '女'
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });


