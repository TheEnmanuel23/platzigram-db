'use strcit'

const r =  require('rethinkdb')

const defaults = {
  host: 'localhost',
  port: 28015,
  db: 'platzigram'
}

class Db{
  constructor (options){
    options = options || {}
    this.host = options.host || defaults.host
    this.port = options.port || defaults.port
    this.db = options.db || defaults.db
  }

  connect () {
    this.connection = r.connect({
      host: this.host,
      port: this.port
    })

    
  }
}