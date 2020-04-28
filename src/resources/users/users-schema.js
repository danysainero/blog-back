const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      index: { unique: true }
    },
    pass: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
      default: 1
    }
  },
  {
    timestamps: true,
  }
);

//This is a pre-hook, before the user information is saved in the database
//this function will be called, we'll get the plain text password, hash it and store it.
UserSchema.pre('save', async function(next){
  const user = this;//'this' refers to the current document about to be saved
  const hash = await bcrypt.hash(this.pass, 10);
  this.pass = hash;//Replace the plain text password with the hash and then store it
  next();
});


UserSchema.methods.isValidPassword = async function(pass){
  const user = this;
  const compare = await bcrypt.compare(pass, user.pass);
  return compare;
}

module.exports = mongoose.model('user', UserSchema, 'user');
