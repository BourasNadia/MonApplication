import React from 'react';

const faker = require('faker');

const generateAppointments = num => {
  const appointments = [];
  for (let i = 0; i < num; i++) {
    const appointment = {
      id: faker.datatype.uuid(),
      professional: faker.name.findName(),
      date: faker.date.future(),
      location: faker.address.city(),
      isCanceled: false,
    };
    appointments.push(appointment);
  }
  return appointments;
};

const appointments = generateAppointments(10);
console.log(appointments);
