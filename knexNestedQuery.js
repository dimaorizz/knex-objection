const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Q_werty12345',
    database: 'knex'
  },
  pool: { min: 0, max: 7 }
});

const nestedQuery = async () => {
  const posts = await knex.select().table('posts').whereIn('author_id', knex.raw(`select id from users where id=1`));
  console.log(posts);
} 

nestedQuery();