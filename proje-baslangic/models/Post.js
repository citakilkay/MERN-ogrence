const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, default: Date.now},
    post_image: {type: String, required: true} // kullanılan görselin ismi sadece veri tabanına konur.
});

module.exports = mongoose.model('Post', PostSchema);
