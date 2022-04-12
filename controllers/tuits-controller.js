import findAllTuits from "../tuits-dao";
import createTuit from "../tuits-dao";
import deleteTuit from "../tuits-dao";
import updateTuit from "../tuits-dao";

findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}


// const createTuit = (req, res) => {
//
//     console.log(req.body);
//     const newTuit = {
//         "_id": "3",
//         "name": "Sneha Nair",
//         "userName": "snehanair",
//         "time": "just now",
//         "imageIcon": "https://www.statuspik.com/wp-content/uploads/2020/12/Beautiful-anime-profile-pics.jpg",
//         "image": "",
//         "title": "",
//         "video": "",
//         "imageCaption" : "",
//         "postInfo": "",
//         "postLink" : "netflix.com",
//         "postComments" : 0,
//         "postRetuits" : 0,
//         "postLikes": 0,
//         "postDislikes" :0,
//         "verified" : true,
//         "liked" : false,
//         "disliked":false
//     };
//     newTuit._id = (new Date()).getTime()+'';
//     newTuit.title = req.body.tuit;
//     tuits=[newTuit].concat(tuits)
//     res.json(newTuit);
// }
//
// const findAllTuits = (req, res) => {
//     res.json(tuits);
// }
// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updatedTuit = req.body;
//     tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
//     res.sendStatus(200);
// }
//
// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = req.params.tid;
//     tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
//     res.sendStatus(200);
// }
//
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
