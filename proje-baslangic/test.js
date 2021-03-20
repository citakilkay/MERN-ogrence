// front-end alanı daha oluşmadığı için database burada kontrol edilir.

const mongoose = require('mongoose');
const Post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1/mongo_test_initdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

Post.find({
    title: 'Benim İkinci Post Başlığım'
}, (error, post) => {
    console.log(error, post);
});

Post.findById('6055dff1541fdb2b30c98c27', (error, post) => {
    console.log(error, post);
});

Post.findByIdAndUpdate('6055dff1541fdb2b30c98c27', {
    title: 'Hebele Hübele Hüb uPDATED'
}, (error, post) => {
    console.log(error, post);
});
/*
Post.findByIdAndDelete('6055dff1541fdb2b30c98c27', (error, post) => {
    console.log(error, post);
});*/

/*
Post.create({
    title: 'Benim İkinci Post Başlığım',
    content: 'Hep mi hep lorem ipsum'
}, (error, post) => {
    console.log(error,post);
});
*/