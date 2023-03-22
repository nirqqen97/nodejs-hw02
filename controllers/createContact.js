const User = require("../models/contactModal");
const { addContact } = require("../models/contacts");
const uservalidator = require("../utils/uservalidator");
const createContact = async (req, res, next) => {
  
  
    
    const { error, value } = uservalidator(req.body)
    if (error) {
        const err = new Error('validation failed', error.details[0])
        err.status = 404
        return next(err)
        
    }
    
    const {name,email,phone, role} = value;
    

    if (!name || !email || !phone) {
      res.status(400).json({
        message : "missing required name field"  
      })    
      return
    }
    
    //  await addContact   (name,email,phone,role)
    const userExist = await User.exists({email})
    console.log('userExist: ', userExist);
    if (userExist) {
      const newContact = await addContact(name,email,phone,role)
      res.status(201).json({
       newContact
      })
      return
    }
    res.status(409).json({
      message : 'Contacts exist'
    })
 
  }

module.exports = createContact