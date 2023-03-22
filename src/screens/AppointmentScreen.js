import React, {useState} from 'react';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

// permet de sélectionner un professionel dans la liste et d'etre rediriger vers la page permettant le choix du rdv
const AppointmentScreen = () => {
  const navigation = useNavigation();
  const [professionnels, setProfessionnels] = useState([
    {
      id: 1,
      nom: 'Lockman',
      prenom: 'Daren',
      adresse: '9656 Erna Camp',
      ville: 'Kundemouth',
      codePostal: '52981-5751',
      telephone: '899-843-6680 x40238',
      profession: 'Pediatrician',
      photo:
        'https://images.pexels.com/photos/5207104/pexels-photo-5207104.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      nom: 'Bergnaum',
      prenom: 'Clark',
      adresse: '5261 Leland Station',
      ville: 'Kenner',
      codePostal: '40772-2306',
      telephone: '1-965-305-9959',
      profession: 'Optician',
      photo:
        'https://images.pexels.com/photos/15559917/pexels-photo-15559917.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      nom: 'Bauch',
      prenom: 'Lindsey',
      adresse: '348 Kris Road',
      ville: 'Port Emil',
      codePostal: '86389-2391',
      telephone: '480.811.1784 x2752',
      profession: 'Surgeon',
      photo:
        'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      nom: 'Collins',
      prenom: 'Carmela',
      adresse: '48788 Stephanie Lakes',
      ville: 'St. Peters',
      codePostal: '07192-6747',
      telephone: '535-544-2966 x162',
      profession: 'Ophthalmologist',
      photo:
        'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      nom: 'Moore',
      prenom: 'Melissa',
      adresse: '05543 Harvey Crossroad',
      ville: 'Darbystad',
      codePostal: '98608-0448',
      telephone: '682-551-7217',
      profession: 'Doctor',
      photo:
        'https://images.pexels.com/photos/5234517/pexels-photo-5234517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      nom: 'Weber',
      prenom: 'Teresa',
      adresse: '904 Kohler Stream',
      ville: 'Anaheim',
      codePostal: '54914',
      telephone: '(531) 486-4849',
      profession: 'Podiatrist',
      photo:
        'https://images.pexels.com/photos/5722166/pexels-photo-5722166.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 7,
      nom: 'Krajcik',
      prenom: 'Nasir',
      adresse: '9307 Kuhic Wall',
      ville: 'Port Genesisside',
      codePostal: '05325',
      telephone: '952.900.7565 x499',
      profession: 'Dentist',
      photo:
        'https://images.pexels.com/photos/6303555/pexels-photo-6303555.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 8,
      nom: 'Hickle',
      prenom: 'Fern',
      adresse: '4464 Bartell Stravenue',
      ville: 'Lindaland',
      codePostal: '72204',
      telephone: '1-269-773-9402',
      profession: 'Dermatologist',
      photo:
        'https://media.istockphoto.com/id/1365756226/fr/photo/photo-dun-jeune-m%C3%A9decin-debout-seul-les-bras-crois%C3%A9s-dans-un-laboratoire.jpg?s=612x612&w=0&k=20&c=8dK_xLm3ruX4lZCSR3iUwRnshAaswouXVtsqxUWkAnU=',
    },
    {
      id: 9,
      nom: 'Berge',
      prenom: 'Jermaine',
      adresse: '357 Grant Points',
      ville: 'Darrenberg',
      codePostal: '33181',
      telephone: '831.863.5527 x666',
      profession: 'Doctor',
      photo:
        'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 10,
      nom: 'Lesch',
      prenom: 'Xzavier',
      adresse: '23507 Zander Ferry',
      ville: 'Gersonmouth',
      codePostal: '02437-4321',
      telephone: '526-339-8401 x0530',
      profession: 'Nurse',
      photo:
        'https://images.pexels.com/photos/12660379/pexels-photo-12660379.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ]);

  const handlePress = () => {
    navigation.navigate('Rdvok');
  };
  const renderAppointment = ({item}) => {
    return (
      <AppointmentContainer>
        <ProfessionalPhoto source={{uri: item.photo}} />
        <AppointmentTitle>
          {item.nom} {item.prenom}
        </AppointmentTitle>
        <AppointmentDate>{item.telephone}</AppointmentDate>
        <AppointmentDate>{item.profession}</AppointmentDate>
        <TouchableOpacity onPress={handlePress}>
          <Button>Choose this professional</Button>
        </TouchableOpacity>
      </AppointmentContainer>
    );
  };

  return (
    <Container>
      <Header />
      {professionnels.length > 0 ? (
        <FlatList
          data={professionnels}
          renderItem={renderAppointment}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{marginTop: 50}}
        />
      ) : (
        <Text>No professionnels found.</Text>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

const AppointmentContainer = styled.View`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const AppointmentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const AppointmentDate = styled.Text`
  font-size: 16px;
  color: #666;
`;

const Button = styled.Text`
  background-color: #007aff;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
`;

const ProfessionalPhoto = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export default AppointmentScreen;
