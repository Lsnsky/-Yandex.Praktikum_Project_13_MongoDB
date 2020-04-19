const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },

    link: {
        type: String,
        required: [true, 'необходимо указать ссылку на изображение'],
        validate: {
            validator: function(v) {
                return /http[s]?:\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{2,5})?|(w{3}\.)?[-a-zA-Z0-9]{1,}\.[a-zA-Z]{2,}(:\d{2,5})?[\/a-zA-Z0-9#]*)/.test(v);
            },
            message: url => `${url.value} некорректный адрес!`
        }
    },
    owner: {
        type: { ObjectId },
        required: true,
    },
    likes: {
        type: [{ ObjectId }],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Card', cardSchema);