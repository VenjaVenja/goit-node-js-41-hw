const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");


const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) =>{
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async() =>{
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
};

const getContactById = async(contactId) =>{
    const contacts = await listContacts();
    const contact = contacts.find((item) => item.id === contactId.toString());
    if(!contact){
        return null;
    }
    return contact;
};

const addContact = async(name, email, phone)=>{
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    };
    contacts.push(newContact);
    updateContacts(contacts);
    return newContact;
};

const removeContact = async(contactId)=>{
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === contactId.toString());
    if(idx === -1){
        return null;
    }
    const [removedContact] = contacts.splice(idx, 1);
    updateContacts(contacts);
    return removedContact;
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
};