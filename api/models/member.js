'use strict';
module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define('Member', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    favbook1: DataTypes.STRING,
    favbook2: DataTypes.STRING,
    favbook3: DataTypes.STRING,
    aboutme: DataTypes.STRING,
    joindt: DataTypes.DATE,
    picture: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Member.hasMany(models.Event);
        Member.hasMany(models.Post);
      }
    }
  });
  return Member;
};