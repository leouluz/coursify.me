
import styled  from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`

export const Wrapper = styled.View`
  flex: 1;
  margin-top: ${RFValue(15)}px;
`;

export const TypeCategoryView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(30)}px;
`;

export const SeeMoreView = styled.View`
  flex-direction: row;
`;

export const BlogCardView = styled.View`
  width: ${RFValue(235)}px;
  margin-right: ${RFValue(38)}px;
`;

export const ContentBlog = styled.View`
  padding: 5px;
`;

export const ListView = styled.View`
  flex-direction: row;
`;

export const ThumbBlog = styled.Image`
  width: 235px;
  height: 103px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: ${RFValue(15)}px;

`;

export const TitleCategory = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
`

export const TitleNotice = styled.Text`
  font-size: ${RFValue(17)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.primary};
`

export const TitleSeeMore = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({theme}) => theme.colors.text_dark};
`

export const DescriptionText = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
`

export const TitleReadMore = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  margin-top: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.secondary};
`
