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

// 2ndry method to update using object but we use index one method bcz it has less time complexity s
// so works better then object method
// ... spread operator is used to copy the existing properties of the object and then we can update the properties we want to change
// const update = (id, updatedPackage) => {
//       const data = fs.readFileSync(packagesFilePath, 'utf-8');
//       const packages = JSON.parse(data);
//       const object = packages.find((item) => item.id === id);
//       if (object) {
//           Object.assign(object, updatedPackage);fs.writeFileSync(packagesFilePath,
//                   JSON.stringify(packages, null, 2),
//                   'utf-8'
//             );
//          }
//       };
// delete method it can also be done by two ways one is by using find and other is by using 
// filter in find we have to find then slice the array than return it which is complex 
// so we use filter method which is simple and easy to understand
const deletePackage = (id) => {
      const data = fs.readFileSync(packagesFilePath, 'utf-8');
      const packages = JSON.parse(data);
      const index = packages.findIndex((item) => item.id === id);
      if (index !== -1) {
            packages.splice(index, 1);
            fs.writeFileSync(packagesFilePath, JSON.stringify(packages, null, 2), 'utf-8');
      }
};
// const deletePackage = (id) => {
//       const data = fs.readFileSync(packagesFilePath, 'utf-8');
//       const packages = JSON.parse(data);
//       const updatedPackages = packages.filter((item) => item.id !== id);
//       fs.writeFileSync(packagesFilePath, JSON.stringify(updatedPackages, null, 2), 'utf-8');
// }

module.exports = {
    getAll,
    getById,
    save,
    update,
    delete :deletePackage
};