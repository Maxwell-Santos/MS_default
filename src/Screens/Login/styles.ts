import styled from 'styled-components/native';

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({ theme })=> theme.buttonColors.red};
  margin-top: 25px;
  width: 100%;
  padding: 15px 0;
  font-size: 16px;
  border-radius: 50px;
  align-items: center;

`;