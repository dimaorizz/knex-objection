
exports.up = async function(knex) {
  if(await knex.schema.hasTable('posts')) {
    return;
  }
  return knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('text').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('author_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
  });
};

exports.down = async function(knex) {
  if(await knex.schema.hasTable('posts')) {
    return knex.schema.dropTable('posts');
  }
};
