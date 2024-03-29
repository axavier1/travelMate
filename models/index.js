const User = require("./User");
const Tour = require('./tour.js')
const Memos = require("./Memos");
const MemosComment = require("./MemosComment");
const TourComment = require("./TourComment.js");
const TourCategory = require("./TourCategory.js");
const TourMembers = require('./TourMembers.js');
const Category = require('./Category.js');
const Profile = require('./Profile.js');
const Icon = require('./Icon.js');
const Image = require('./Image.js');

Profile.hasOne(User, {
    foreignKey: 'profile_id'
});

User.belongsTo(Profile, {
    foreignKey: 'profile_id'
});

User.belongsToMany(Tour, {
    through: 'tour_members'
});

Tour.belongsToMany(User, {
    through: 'tour_members'
});

Category.belongsToMany(Tour, {
    through: 'tour_categories'
});

Tour.belongsToMany(Category, {
    through: 'tour_categories'
});

User.hasMany(Memos, {
    foreignKey: 'user_id'
});

Memos.belongsTo(User, {
    foreignKey: 'user_id'
});

Memos.hasMany(MemosComment, {
    foreignKey: 'memo_id'
});

MemosComment.belongsTo(Memos, {
    foreignKey: 'memo_id'
});

Tour.hasMany(TourComment, {
    foreignKey: 'tour_id'
});

TourComment.belongsTo(Tour, {
    foreignKey: 'tour_id'
})

Tour.hasMany(Image, {
    foreignKey: 'tour_id'
})

Image.belongsTo(Tour, {
    foreignKey: 'tour_id'
})


module.exports = { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile, Icon, Image };
