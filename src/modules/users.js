const fs = require('fs');
const path = require('path');

const getUsers = () => {
    const filePath = path.join(__dirname, './data/users.json')
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (err) {
        console.error('Error reading users file:', err);
        return JSON.stringify([]);
    }
};

module.exports = getUsers;