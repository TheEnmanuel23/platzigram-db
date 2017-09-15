'use strict'

const test = require('ava')
const uuid = require('uuid-base62')
const Db = require('../')
const r = require('rethinkdb')

const dbName = `platzigram_${uuid.v4()}`
const db = new Db({ db: dbName })

test.before('setup database', async t => {
  await db.connect()
  t.true(db.connected, 'should be connected')
})

test.after('disconnect database', async t => {
  await db.disconnect()
  t.false(db.connected, 'should be disconnected')
})

test.after.always('cleanup database', async t => {
  let conn = await r.connect({})
  await r.dbDrop(dbName).run(conn)
})

test('save image', async t => {
  t.is(typeof db.saveImage, 'function', 'saveImage is function')
  
  let image = {
    url: `https://platzigram.test/${uuid.v4()}.jpg`,
    likes: 0,
    user_id: uuid.uuid()
  }
})
