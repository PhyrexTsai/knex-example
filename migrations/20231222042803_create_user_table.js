/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.hasTable('user').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('user', table => {
          table.increments('id');
          table.string('name').notNullable();
          table.string('email').notNullable().unique();
          table.string('password').notNullable();
          table.bigint('created_ati').notNullable();
          table.bigint('updated_ati');
          table.bigint('deleted_ati');
        })
      }
    }),
    knex.schema.hasTable('user_setting').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('user_setting', (table) => {
          table.increments('id');
          table.bigint('user_id').unsigned().notNullable();
          table.string('address');
          table.string('phone');
          table.bigint('created_at').notNullable();
          table.bigint('updated_at');
          table.bigint('deleted_at');
        })
      }
    })
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('user_setting');
};
