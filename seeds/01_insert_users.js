const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
        {username: `${faker.name.findName()}`, email: `${faker.internet.email()}`, password: `${faker.internet.password()}`},
      ]);
    });
};
