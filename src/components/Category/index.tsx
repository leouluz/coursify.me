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
}

interface MediasProps {
  postId: Number; 
  source_url: any; 

}

export function Category( { title, typeCategory } : Category) {

  const [post, setPost] = useState<any>()
  const [postFinally, setPostFinally] = useState<any>()
  const [medias, setMedias] = useState<any>()

  useEffect(() => {
    async function loadPost() {
    try{
      const response = await api.get(`posts?categories=${typeCategory}`);
      const arrayFormatted = response.data.map( (item: PostsProps) => ({
          id:item.id, 
          slug:item.slug, 
          author: item.author,
          categories: item.categories,
          rendered: item.title.rendered
        }))
        setPost(arrayFormatted);
    }catch(err){
      console.log(err)
    }
  }
 loadPost();
  }, [typeCategory])

useEffect(() => {
  async function loadMedias() {
    try{
        const response = await api.get('media');
        setMedias(
          response.data.map( (item: { id: any; post: any, source_url: any; media_details :{ sizes: { medium : { source_url : String}} } }  ) => ({
            source_url: item.media_details.sizes.medium.source_url,
            postId: item.post
          }))
        )
        const teste = post.map((item: { id: any; rendered: any; slug: any; }) => ({
          id: item.id,
          title: item.rendered,
          slug: item.slug,
          image: medias.filter( (media : MediasProps) => media.postId == item.id)
        }))

        setPostFinally(teste)

      }catch(err){
        console.log(err)
      }
    }
      loadMedias();
  }, [])
  
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
              data={postFinally}
              renderItem={(({item}) => <CardBlog content={item} />)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </ListView>
        </Wrapper>
      </Container>
    )
}
