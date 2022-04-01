const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE admin (
      userLogin TEXT,
      password TEXT
    )`)

    await db.exec(`CREATE TABLE products (
      id INTEGER PRIMARY KEY,
      image BLOB,
      name TEXT,
      price MONEY,
      description TEXT,
      category TEXT,
      altText TEXT
    )`)
  }
}

initDb.init()
