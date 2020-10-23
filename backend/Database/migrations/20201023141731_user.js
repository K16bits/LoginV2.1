
exports.up = function(knex) {
    return knex.schema
        .createTable('users',function(table){
            table.increments('id');
            table.string('email',255).notNullable();
            table.integer('senha',255).notNullable();
            table.string('nome',255).notNullable();
        })
};

exports.down = function(knex) {
    return knex.dropTable('users');
};
