import knex from 'knex';


knex({
    client: 'mysql',
    connection: {
        host: 'localhost'
    }
})