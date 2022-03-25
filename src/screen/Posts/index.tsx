import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import RenderHtml from 'react-native-render-html';
import { ActivityIndicator, ScrollView, useWindowDimensions } from 'react-native';
import api from '../../services/api';
import theme from '../../global/theme';

export function Posts({route} : any) {

  const [content, setContent] = useState('')
  const { postId } = route.params

  useEffect(() => {
    async function loadContent() {
    try{
      const response = await api.get(`posts/${postId}`);
      setContent(response.data.content.rendered);
    }catch(err){
      console.log(err)
    }
  }
    loadContent();
  }, [])

  const { width } = useWindowDimensions();

  return (
    <>
      <Header />
     {
     content !== '' ?
      <ScrollView
      style={{padding: 10}}
      >
          <RenderHtml
            contentWidth={width}
            source={{html: content}}
            />
        </ScrollView> :
        <ActivityIndicator 
        color={theme.colors.primary}
        style={{marginTop:18}}
        />
      }
    </>
  );
}

