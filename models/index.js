const Post = require('./Post');
const User = require('./user');

//associations
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Post.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = { User, Post };
