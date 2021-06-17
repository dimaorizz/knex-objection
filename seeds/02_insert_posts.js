const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: 1},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
        {title: `${faker.lorem.word()}`, description: `${faker.lorem.paragraph(1)}`, text: `${faker.lorem.paragraph(1)}`, author_id: Math.floor(Math.random() * 9 + 1)},
      ]);
    });
};
