'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_technical_reading_lists', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('periodical_or_book').notNullable().defaultTo('');
    table.integer('books_id').defaultTo(null).references('id').inTable('books').onDelete('CASCADE').index();
    table.integer('periodical_id').defaultTo(null).references('id').inTable('periodicals').onDelete('CASCADE').index();
    table.integer('user_book_reviews_id').defaultTo(null).references('id').inTable('user_book_reviews').onDelete('CASCADE').index();
    table.boolean('is_completed').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_technical_reading_lists');
};
