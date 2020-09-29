/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('document', {
    id: {
      type: 'string',
      primary: true
    },
    body: {
      type: 'json',
      notNull: true
    }
  })
};

exports.down = pgm => {
};
