const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  about: {
    type: String,
    required: true,
    minlength: [2, 'минимальная длина имени 2 символа'],
    maxlength: [30, 'максимальная длина имени 30 символов'],
  },

  avatar: {
    type: String,
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
      message: (url) => `${url.value} некорректный адрес!`,
    },
    required: true,
  },
});


module.exports = mongoose.model('User', userSchema);
