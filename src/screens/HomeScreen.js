import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

//page d'accueil permettant le choix d'acces à la prise de rendez vous ou à l'historique

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <Header />
      <ButtonContainer>
        <Button
          title="MY'DOCTORS"
          icon={
            <IconContainer>
              <Icon name="address-book" size={25} color="white" />
            </IconContainer>
          }
          buttonStyle={buttonStyles.primary}
          onPress={() => navigation.navigate('RDV')}
        />
        <Button
          title="MY APP'"
          icon={
            <IconContainer>
              <Icon name="bell" size={25} color="white" />
            </IconContainer>
          }
          buttonStyle={buttonStyles.secondary}
          onPress={() => navigation.navigate('AppointmentConfirm')}
        />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffff;
`;

const ButtonContainer = styled.View`
  margin: 80px;
  flex-direction: column;
  justify-content: center;
  margin: 150px 80px 0 80px;
`;

const IconContainer = styled.View`
  margin-right: 10px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const buttonStyles = {
  primary: {
    backgroundColor: '#007aff',
    borderRadius: 10,
    shadowColor: '#757575',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    paddingVertical: 60,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  secondary: {
    backgroundColor: '#007aff',
    borderRadius: 10,
    shadowColor: '#757575',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    paddingVertical: 60,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
};

export default HomeScreen;
