console.clear();
const argv = require('yargs').argv;
const contacts = require("./db");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case "list":
            const result = await contacts.listContacts();
            console.log(result);
            break;
        case "get":
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;
        case "add":
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;
        case "remove":
            const removedContact = await contacts.removeContact(id);
            console.log(removedContact)
            break;
        default:
            console.warn('\x1B[31m Unknown action type!');
            break;
    }
};

invokeAction(argv);