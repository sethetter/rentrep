var bcrypt = require('bcrypt');

var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {

    email: {
      type: 'email',
      unique: true,
      required: true
    },
    type: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },

    tenant: { model: 'tenant' },
    landlord: { model: 'landlord' },

    toJSON: function() {
      var user = this.toObject();
      delete user.password;
      return user;
    }
  },

  beforeCreate: function(values, next) {

    // Are we providing / updating password?
    if (values.password) {
      bcrypt.hash(values.password, 10, function(err, hash) {

        // TODO: where does this get handled?
        if (err) return next(err);

        values.password = hash;
        next();
      });
    }
  }
};

module.exports = User;
