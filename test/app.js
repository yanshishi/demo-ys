const Sequelize = require("sequelize");
const db = require("./db.js");


const sequelize = new Sequelize(db.database, db.user, {
  host: db.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
sequelize.authenticate().then(() => {
  console.log("连接成功");
}).catch(err => {
  console.error('数据库连接失败：', err);
});



//定义表
const User = sequelize.define('user', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: true
});

//创建表

User.sync({ force: true }).then(() => {
  console.log("数据表创建成功");
  return User.create({
    name: "hellen",
    sex: "women",
    age: 25
  });

}).then(res => {
  console.log("res", res);
}).catch(err => {
  console.error(err);
});


User.findOne({
  where: {
    name: 'hellen',
  },
  attributes: ['name', ['age', 'myages']]
}).then(user => {
  console.log("数据", JSON.stringify(user))
});