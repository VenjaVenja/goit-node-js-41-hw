// const admins = ["Asert", "Mohart", "Iggimen", "Loltus"];
// const clients = ["Sweenee", "Tood", "Peppa", "Leach"];

// const users = {
//     admins,
//     clients
// };

// module.exports = users;

////////////////////////////////////////////////////////////////////////////
// console.clear();
// // console.log('Hello world! And my friends too) You - succers!');
// // const importedUsers = require("./test");
// // console.log(importedUsers);

// // const {admins} = require("./test");
// // console.log(admins);

// // const nodemon = require("nodemon");

// const fs = require("fs/promises");

// const fileOperation = async (filePath, action = "read", data) => {
//  switch (action) {
//     case "read":
//         // const data = await fs.readFile(filePath);
//         // // console.log(data)
//         // const text = data.toString();
//         // console.log(text)
//         const text = await fs.readFile(filePath, "utf-8");
//         console.log(text);
//         break;
//     case "add":
//         await fs.appendFile(filePath, data)
//         // const newText = await fs.appendFile(filePath, data);
//         // console.log(newText) appendFile возвращает underfind
//         break;
//     case "replace":
//         await fs.writeFile(filePath, data)
//         // const result = await fs.writeFile(filePath, data);
//         // console.log(result) appendFile возвращает underfind
//         break;
//     default:
//         break;
//  }
// }

// // fileOperation("./text.txt", "read");
// // fileOperation("./text.txt", "add", "\nYooouuuuuu wiiiilllll dddeeeeee");
// // fileOperation("./text.txt", "replace", "\Something NEW. NEW TEXT");
