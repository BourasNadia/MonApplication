import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import Header from '../components/Header';

//page de connexion utilisateur

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    props.setIsLoggedIn(true);
  };

  return (
    <Container>
      <Header />
      <InputContainer>
        <InputLabel>Email</InputLabel>
        <Input
          placeholder="email@gmail.com"
          value={email}
          onChangeText={setEmail}
          contentContainerStyle={{marginTop: 60}}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Password</InputLabel>
        <Input
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </InputContainer>
      <LoginButton onPress={handleLogin}>
        <LoginButtonText>GO</LoginButtonText>
      </LoginButton>
      <ForgotPassword>Did you forget your password ?</ForgotPassword>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
  margin-bottom: 20px;
`;

const InputLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 50px;
  color: #007bff;
`;

const Input = styled.TextInput`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #007bff;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
`;

const LoginButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

const ForgotPassword = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
  text-align: center;
`;

export default LoginScreen;
