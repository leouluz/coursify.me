import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import api from '../../services/api';
import { CardBlog } from '../CardBlog'
import { 
  Container, TitleCategory, Wrapper, 
  TypeCategoryView, TitleSeeMore, SeeMoreView,
  ListView
} from './styles'

interface Category {
  title: String;
  typeCategory: Number;
}

interface PostsProps {
  id: any; 
  slug: any; 
  rendered: any;
  author: any;
  categories: any;
  title?: any;
  excerpt: any;
  featured_media: any;
}

export function Category( { title, typeCategory } : Category) {

  const [post, setPost] = useState<any>()

  useEffect(() => {
    async function loadPost() {
    try{
      const response = await api.get(`posts?categories=${typeCategory}`);
      const arrayFormatted = response.data.map( (item: PostsProps) => ({
          id:item.id, 
          slug:item.slug, 
          author: item.author,
          categories: item.categories,
          rendered: item.title.rendered,
          mediaId: item.featured_media,
          description: item.excerpt.rendered
        }))
        setPost(arrayFormatted);
    }catch(err){
      console.log(err)
    }
  }
 loadPost();
  }, [typeCategory])
  
    return (
      <Container>
        <Wrapper>
          <TypeCategoryView>
            <TitleCategory>{title}</TitleCategory>
            <SeeMoreView>
              <TitleSeeMore>VER MAIS</TitleSeeMore>
              <TitleSeeMore>{` >`}</TitleSeeMore>
            </SeeMoreView>
          </TypeCategoryView>
          <ListView>
            <FlatList 
              data={post}
              renderItem={(({item}) => <CardBlog content={item} />)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </ListView>
        </Wrapper>
      </Container>
    )
}
