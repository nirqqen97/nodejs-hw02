const User = require("../models/contactModal")
const updateFavorite =  async (req, res, next) => {
 
    const { id } = req.params
    
            
    const updatedUser = await User.findByIdAndUpdate(id, { favorite : req.body.favorite}, {new : true})

    res.status(200).json({
        contact: updatedUser
    })
 
}
module.exports = updateFavorite