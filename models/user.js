const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },

    about: {
        type: String,
        required: true,
        minlength: [2, 'минимальная длина имени 2 символа'],
        maxlength: [30, 'максимальная длина имени 30 символов']
    },

    avatar: {
        type: String,
        required: [true, 'необходимо указать ссылку на изображение'],
        validate: {
            validator: function(v) {
                return /http[s]?:\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{2,5})?|(w{3}\.)?[-a-zA-Z0-9]{1,}\.[a-zA-Z]{2,}(:\d{2,5})?[\/a-zA-Z0-9#]*)/.test(v);
            },
            message: url => `${url.value} некорректный адрес!`
        }
    }
});



module.exports = mongoose.model('User', userSchema);