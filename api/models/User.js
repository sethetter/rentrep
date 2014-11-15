var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username: {
      type: 'string',
      unique: true
    },
    email: {
      type: 'email',
      unique: true
    },
    passports : {
      collection: 'Passport',
      via: 'user'
    },
    type: {
      type: 'string',
      required: true
    }
  }
};

module.exports = User;
