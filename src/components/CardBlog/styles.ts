
import styled  from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const BlogCardView = styled.View`
  width: ${RFValue(235)}px;
  margin-right: ${RFValue(38)}px;
  border-radius: 25px;

  border-width: 1px;
  border-color: #ddd;
  border-bottom-width: 1px;
`;

export const ContentBlog = styled.View`
  padding: 10px;
`;

export const ThumbBlog = styled.Image`
  width: ${RFValue(232)}px;
  height: ${RFValue(103)}px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: ${RFValue(15)}px;

`;

export const TitleNotice = styled.Text`
  font-size: ${RFValue(17)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
`;

export const DescriptionText = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const TitleReadMore = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  margin-top: ${RFValue(5)}px;
  color: ${({theme}) => theme.colors.secondary};
  margin-bottom: 5px;
`;
