import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled  from 'styled-components/native'
import { Feather } from '@expo/vector-icons'; 

export const Container = styled(View).attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.39,
  shadowRadius: 8.30,
  
  elevation: 10,
})`
  width: 100%;
  height: ${RFValue(64)}px;

  background: #FFFFFF;
  
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

`
export const Logo = styled.Image`
  width: ${RFValue(169)}px;
  height: ${RFValue(50)}px;

`

export const CircleMenu = styled.View`
  width: ${RFValue(37)}px;
  height: ${RFValue(37)}px;

  background-color: ${({theme}) => theme.colors.primary};

  border-radius: 25px;
  align-items: center;
  justify-content: center;
`

export const MenuIcon = styled(Feather)`
  color: #ffff;
`

