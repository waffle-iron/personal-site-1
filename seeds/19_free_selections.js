'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('free_selections').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('free_selections').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 5,
          periodicals_id: null,
          is_completed: true,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 2,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 18,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 3,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 31,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 4,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 43,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 5,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 61,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 6,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 79,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 7,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 80,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 8,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 81,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        }),
        knex('free_selections').insert({
          id: 9,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 82,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('free_selections_id_seq', (SELECT MAX(id) FROM free_selections));");
    });
};
