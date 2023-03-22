import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';

//permet de choisir la date et le créneau de rendez-vous

const Rdvok = ({navigation}) => {
  const [slots, setSlots] = useState([
    {id: 1, time: '9:00 AM', day: 'Monday', available: true},
    {id: 2, time: '10:00 AM', day: 'Monday', available: false},
    {id: 3, time: '11:00 AM', day: 'Monday', available: true},
    {id: 4, time: '1:00 PM', day: 'Tuesday', available: true},
    {id: 5, time: '2:00 PM', day: 'Tuesday', available: false},
    {id: 6, time: '3:00 PM', day: 'Wednesday', available: true},
    {id: 7, time: '4:00 PM', day: 'Wednesday', available: true},
    {id: 8, time: '5:00 PM', day: 'Thursday', available: true},
  ]);

  const handlePress = id => {
    const selectedSlot = slots.find(slot => slot.id === id);
    if (selectedSlot.available) {
      Alert.alert(
        'Confirm Appointment',
        `Do you want to confirm this appointment for ${selectedSlot.time} on ${selectedSlot.day}`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Confirm',
            onPress: () =>
              navigation.navigate('AppointmentConfirm', {
                selectedSlot: selectedSlot,
              }),
          },
        ],
      );
    } else {
      alert('This slot is not available');
    }
  };

  const renderItem = ({item}) => (
    <SlotContainer available={item.available}>
      <SlotTime>{item.time}</SlotTime>
      <TouchableOpacity onPress={() => handlePress(item.id)}>
        <Button>{item.available ? 'Make this appointment' : 'Full'}</Button>
      </TouchableOpacity>
    </SlotContainer>
  );

  return (
    <Container>
      <Header />
      <Title>Choose a slot time </Title>
      <FlatList
        data={slots}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
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

const SlotContainer = styled.View`
  border-width: 1px;
  border-color: ${props => (props.available ? '#ccc' : '#ff0000')};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  opacity: ${props => (props.available ? 1 : 0.5)};
  background-color: #ffffff;
`;

const SlotTime = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Button = styled.Text`
  background-color: #007aff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
`;

export default Rdvok;
