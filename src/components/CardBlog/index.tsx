import React, { useEffect, useState } from 'react'
import RenderHtml from 'react-native-render-html';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { 
  BlogCardView, ThumbBlog, TitleNotice, 
  TitleReadMore, ContentBlog,
} from './styles'

export function CardBlog({content} : any) {

  const [uri, setUri] = useState();
  const navigation = useNavigation<any>();
  
  useEffect(() => {
    async function loadMedias() {
      try{
        const response = await api.get(`media/${content.mediaId}`);
        setUri(response.data.media_details.sizes.medium.source_url);
        }catch(err){
          console.log(err)
        }
      }
      if(content.mediaId){
        loadMedias();
      }
    }, [])

    function navigationTo (){
      navigation.navigate("Posts", {
        postId:content.id
      });
    }

  return (
        <>
        {
          uri &&
          <BlogCardView>
            <ThumbBlog
              source={{
                uri
              }}
              />
            <ContentBlog>
              <TitleNotice>{content.rendered}</TitleNotice>
              <RenderHtml
                contentWidth={235}
                source={{html: content.description}}
              />
              <TouchableOpacity onPress={navigationTo}>
                <TitleReadMore>Read more</TitleReadMore>
              </TouchableOpacity>
            </ContentBlog>
          </BlogCardView>
        }
        </>
  )
}
