const faker = require('faker');

const data = {professionnels: []};

for (let i = 0; i < 10; i++) {
  const professionnel = {
    id: i + 1,
    nom: faker.name.lastName(),
    prenom: faker.name.firstName(),
    adresse: faker.address.streetAddress(),
    ville: faker.address.city(),
    codePostal: faker.address.zipCode(),
    telephone: faker.phone.phoneNumber(),
  };
  data.professionnels.push(professionnel);
}
console.log(JSON.stringify(data));

module.exports = data;
