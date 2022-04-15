import tuitsDao from "../tuits-dao.js";

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    console.log('newTuit: '+JSON.stringify(newTuit));

    const tuitForDao = {
      //  "_id": "3",
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
    };
   // newTuit._id = (new Date()).getTime()+'';
    tuitForDao.title = req.body.tuit;

    const insertedTuit = await tuitsDao.createTuit(tuitForDao);
    console.log('insertedTuit: '+JSON.stringify(insertedTuit));
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
