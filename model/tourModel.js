const fs = require('fs');
const path = require('path');

const packagesFilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const Data = fs.readFileSync(packagesFilePath, 'utf-8');
    return JSON.parse(Data);
};

const getById = (id) => {
    const Data = fs.readFileSync(packagesFilePath, 'utf-8');
    const packages = JSON.parse(Data);

    return packages.find((item) => item.id === id);
};

const save = (Packages) => {
    const Data = fs.readFileSync(packagesFilePath, 'utf-8');
    const packages = JSON.parse(Data);

    packages.push(Packages);

    fs.writeFileSync(
        packagesFilePath,
        JSON.stringify(packages, null, 2),
        'utf-8'
    );
};
const update = (id, updatedPackage) => {
    const data = fs.readFileSync(packagesFilePath, 'utf-8');
    const packages = JSON.parse(data);
    const index = packages.findIndex((item) => item.id === id);
    if (index !== -1) {
        packages[index] = { ...packages[index], ...updatedPackage };
        fs.writeFileSync(packagesFilePath,JSON.stringify(packages, null, 2),
            'utf-8'
        );
    }
};

const deletePackage = (id) => {
      const data = fs.readFileSync(packagesFilePath, 'utf-8');
      const packages = JSON.parse(data);
      const index = packages.findIndex((item) => item.id === id);
      if (index !== -1) {
            packages.splice(index, 1);
            fs.writeFileSync(packagesFilePath, JSON.stringify(packages, null, 2), 'utf-8');
      }
};

module.exports = {
    getAll,
    getById,
    save,
    update,
    delete :deletePackage
};