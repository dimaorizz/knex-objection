const { Model } = require('objection');

class PostModel extends Model {
  static get tableName() {
    return 'posts';
  }

  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    const User = require('../models/Users');

    return {
      author_id: {
        relation: Model.BelongsToOneRelation,
        // The related model. This can be either a Model
        // subclass constructor or an absolute file path
        // to a module that exports one. We use a model
        // subclass constructor `Animal` here.
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'posts.author_id'
        }
      },
    };
  }
}

module.exports = PostModel;