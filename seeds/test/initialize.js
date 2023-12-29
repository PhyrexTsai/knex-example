const moment = require('moment');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {id: 1, name: 'aaaa', email: 'aaaa@example.com', password: '00000000', created_ati: moment().unix()},
    {id: 2, name: 'bbbb', email: 'bbbb@example.com', password: '00000000', created_ati: moment().unix()},
    {id: 3, name: 'cccc', email: 'cccc@example.com', password: '00000000', created_ati: moment().unix()}
  ]);

  await knex('user_setting').del();
  await knex('user_setting').insert([
    {id: 1, user_id: 1, address: 'Tokyo', phone: '000-0000-0000', created_ati: moment().unix()},
    {id: 2, user_id: 2, address: 'Osaka', phone: '000-0000-0000', created_ati: moment().unix()},
    {id: 3, user_id: 3, address: 'Fukuoka', phone: '000-0000-0000', created_ati: moment().unix()}
  ]);
};
