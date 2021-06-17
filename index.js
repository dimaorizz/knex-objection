const Knex = require('knex');
const redis = require('redis');
const { Model } = require('objection');
const User = require('./models/Users');
const Post = require('./models/Posts');

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis connected');
});

client.set('testValue', 'hello');

const knex = Knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Q_werty12345',
    database: 'knex'
  },
  pool: { min: 0, max: 7 }
});

Model.knex(knex);

const makeQuery = async () => {
  try {
    await User.query().insert({
      username: 'tester',
      email: 'sample@da.com',
      password: '123'
    })
    console.log('insertion done');
  } catch (error) {
    console.log(error)
  }
}

const findUser = async () => {
  try {
    const users = await User.query()
    .select('username')
    .where('id', '>', 5)
    .orderBy('username');
    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

// findUser().then(() => knex.destroy());


