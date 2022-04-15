import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   name: String,
                                   userName: String,
                                   time: String,
                                   image: String,
                                   video : String,
                                   title: String,
                                   imageIcon: String,
                                   imageCaption : String,
                                   postInfo: String,
                                   postLink : String,
                                   postComments : Number,
                                   postRetuits : Number,
                                   postLikes: Number,
                                   postDislikes: Number,
                                   verified : Boolean,
                                   liked : Boolean,
                                   disliked:Boolean
                               }, {collection: 'Tuits'});
export default schema;

/*

{
        "_id": "3",
        "name": "Sneha Nair",
        "userName": "snehanair",
        "time": "just now",
        "imageIcon": "https://www.statuspik.com/wp-content/uploads/2020/12/Beautiful-anime-profile-pics.jpg",
        "image": "",
        "title": "",
        "video": "",
        "imageCaption" : "",
        "postInfo": "",
        "postLink" : "netflix.com",
        "postComments" : 0,
        "postRetuits" : 0,
        "postLikes": 0,
        "postDislikes" :0,
        "verified" : true,
        "liked" : false,
        "disliked":false
    }

 */

