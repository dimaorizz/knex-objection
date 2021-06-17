
exports.up = async function(knex) {
  if(await knex.schema.hasTable('users')) {
    return;
  }
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('username').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
  
};

exports.down = async function(knex) {
  if(await knex.schema.hasTable('users')) {
    return knex.schema.dropTable('users');
  }
};
