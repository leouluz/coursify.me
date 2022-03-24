import React, { useEffect, useState } from 'react'
import { 
  BlogCardView, ThumbBlog, TitleNotice, DescriptionText, TitleReadMore, ContentBlog
} from './styles'

export function CardBlog({content} : any) {

  const [uri, setUri] = useState('https://blog.coursify.me/wp-content/uploads/2019/07/sell-on-social-networks-cover-coursfiyme.jpg')

  useEffect(() =>{
    console.log(content)
  },[])

  return (
        <>
          <BlogCardView>
            <ThumbBlog
              source={{
                uri
              }}
              />
            <ContentBlog>
              <TitleNotice>{content.rendered}.</TitleNotice>
              <DescriptionText>Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar ...</DescriptionText>
              <TitleReadMore>Read more</TitleReadMore>
            </ContentBlog>
          </BlogCardView>
        </>
  )
}
