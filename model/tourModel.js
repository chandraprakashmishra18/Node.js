const fs = require('fs');
const path = require('path');
const packagesFilePath = path.join(__dirname, '../data/tour.json');
 const getAll = () => {
    const Data = fs.readFileSync(packagesFilePath, 'utf-8');
    return JSON.parse(Data);
 }

 const getById = (id) => {
    const Data = fs.readFileSync(packagesFilePath, 'utf-8');
    const packages = JSON.parse(Data);
    return packages.find((item) => item.id === id);
 }
 module.exports = {
    getAll,
    getById
 };