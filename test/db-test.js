'use strict'

const test = require('ava')
const uuid = require('uuid-base64')
const Db = require('../')

const dbName = `platzigram_${uuid.v4()}`
const db = new Db({ db: dbName })

test('save image', async t => {
	
})