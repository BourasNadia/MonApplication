import React from 'react';
import styled from 'styled-components/native';

const Header = () => {
  return (
    <Container>
      <Logo source={require('../assets/log.png')} />
      <Title>MY'DOC</Title>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 70px;
  height: 70px;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
  color: #ff0000;
`;

export default Header;
