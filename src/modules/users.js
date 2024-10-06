const fs = require('fs');
const path = require('path');

const getUsers = () => {
    const filePath = path.join(__dirname, '../data/user.json')

    
    console.log("File path:", filePath);

    try {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        return fileData;
    } catch (err) {
        console.error('Error reading users file:', err);
        return JSON.stringify([]);
    }
};

module.exports = getUsers;