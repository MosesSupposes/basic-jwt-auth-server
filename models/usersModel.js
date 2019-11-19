const db = require('../data/dbClient')

module.exports = (function usersModel() {
    function all() {
        return db('users')
    }

    function findByUsername(username) {
        return db('users')
            .where({username})
            .first()
    }

    async function create(user) {
        await db('users').insert(user)
        return findByUsername(user.username)
    } 

    async function update(username, changes) {
        await db('users').update(changes).where({username})
        return db('users').where({username})
    }

    function remove(username) {
        return db('users').delete().where({username})
    }

    return {
        all, 
        findByUsername,
        create,
        update,
        remove
    }
})()