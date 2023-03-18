const path = require('path');
const fs = require('fs').promises;
const User = require('./contactModal');

 
 const contactsPath = path.join('models', 'contacts.json');
  /**
   *  func to get contacts
   *  @param {Promise<JSON>}
   */
 const  listContacts = async () => {
   const info = User.find()
    return info
  }
  /** get contacts by ID
   * @param {Number} contactId 
   */
  
  const getContactById = async (contactId) =>  {
    const user = await User.findById(contactId)
    
    return user
  }
  /** func to delete contacts by id 
   * 
   * @param {Number} contactId 
   * @returns {Promise<Object>}
   */
  
  const removeContact = async(id)  =>{
    const deletedUser = await User.findOneAndDelete(id)
    return deletedUser;
  }

  /** func to add contact 
   * 
   * @param {string} name 
   * @param {string} email 
   * @param {string} phone 
   * @returns {Promise<Object>}
   */
  
  const addContact = async (name, email, phone,role) => {    
    const newContact = {
      name,
      email,
      phone,
      role
    };
    const newUser = await User.create(newContact)
    return newUser
  };

  const Contacts = async() =>{
    const readRes = await fs.readFile(contactsPath);
    const infoJs = JSON.parse(readRes)
    return infoJs
  }

module.exports = {  
    listContacts,
    getContactById,
    removeContact,
    addContact,
    Contacts

}