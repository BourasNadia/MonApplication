import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';

//permet d'avoir un historique des rendez-vous confirmés

const AppointmentConfirm = ({route}) => {
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);

  const selectedSlot = route.params.selectedSlot;

  const confirmAppointment = () => {
    setConfirmedAppointments([...confirmedAppointments, selectedSlot]);
  };

  const renderItem = ({item}) => (
    <AppointmentContainer>
      <AppointmentDate>
        {item.day} - {item.time}
      </AppointmentDate>
      <AppointmentStatus>Confirmed</AppointmentStatus>
    </AppointmentContainer>
  );

  return (
    <Container>
      <Header />
      <Title>Confirmed Appointments</Title>
      <FlatList
        data={confirmedAppointments}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={{width: '100%'}}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 40px;
  text-align: center;
`;

const AppointmentContainer = styled.View`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ffffff;
`;

const AppointmentDate = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const AppointmentStatus = styled.Text`
  color: green;
  font-weight: bold;
`;

export default AppointmentConfirm;
