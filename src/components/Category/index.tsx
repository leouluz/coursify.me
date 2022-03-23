import React from 'react'
import { 
  Container, TitleCategory, Wrapper, 
  TypeCategoryView, TitleSeeMore, SeeMoreView,
  BlogCardView, ThumbBlog, TitleNotice, DescriptionText, TitleReadMore, ContentBlog, ListView
} from './styles'

export function Category() {
  return (
    <Container>
      <Wrapper>
        <TypeCategoryView>
          <TitleCategory>Cursos Online</TitleCategory>
          <SeeMoreView>
            <TitleSeeMore>VER MAIS</TitleSeeMore>
            <TitleSeeMore>{` >`}</TitleSeeMore>
          </SeeMoreView>
        </TypeCategoryView>
        <ListView>
          <BlogCardView>
            <ThumbBlog
              source={{
                uri: 'https://www.poderdaescuta.com/wp-content/uploads/2019/07/298274-conheca-como-a-lego-microsoft-e-localiza-trataram-a-inovacao-na-pratica.jpg',
              }}
              />
            <ContentBlog>
              <TitleNotice>Como criar uma landing page de alta...</TitleNotice>
              <DescriptionText>Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar ...</DescriptionText>
              <TitleReadMore>Read more</TitleReadMore>
            </ContentBlog>
          </BlogCardView>
          <BlogCardView>
            <ThumbBlog
              source={{
                uri: 'https://www.poderdaescuta.com/wp-content/uploads/2019/07/298274-conheca-como-a-lego-microsoft-e-localiza-trataram-a-inovacao-na-pratica.jpg',
              }}
              />
            <ContentBlog>
              <TitleNotice>Como criar uma landing page de alta...</TitleNotice>
              <DescriptionText>Uma landing page de alta conversão é o que todo mundo que vende online precisa ter para otimizar ...</DescriptionText>
              <TitleReadMore>Read more</TitleReadMore>
            </ContentBlog>
          </BlogCardView>
        </ListView>
      </Wrapper>
    </Container>
  )
}
