'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('los_angeles_times_book_prizes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('los_angeles_times_book_prizes').insert({
          id: 1,
          user_id: 1,
          periodical_or_book: 'book',
          books_id: 128,
          periodicals_id: null,
          is_completed: false,
          created_at: new Date('2017-03-14 14:55:16 UTC'),
          updated_at: new Date('2017-03-22 14:55:18 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('los_angeles_times_book_prizes_id_seq', (SELECT MAX(id) FROM los_angeles_times_book_prizes));");
    });
};