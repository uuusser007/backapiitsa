const userControllers=require('./user.controllers')

const getAllUsers=(req,res)=>{
    userControllers.findAllUsers()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(400).json({message:"Bad request",err})
    })
}

const postNewUser = (req, res) => {
    const userObj = req.body;
    userControllers.createUser(userObj)
    .then((data)=>{
        res.status(201).json(data);
    })
    .catch((err)=>{
        res.status(400).json({message:"bad request", err})
    })
}


const deleteUser = (req, res) => {
    const id = req.params.id 
    userControllers.deleteUser(id)
        .then(data => {
            if(!data) {
                return res.status(404).json({message: 'Invalid ID'})
            }
            res.status(204).json()
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}
module.exports={
    getAllUsers,
    postNewUser,
    deleteUser
}