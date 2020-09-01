exports.up = (pgm) => {
  pgm.createTable('library', {
    id: 'id',
    username: {
      type: 'text',
      notNull: true
    },
    body: {
      type: 'json',
      notNull: true
    }
  })
  pgm.createIndex('library', 'username')
}
