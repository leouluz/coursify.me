import React from 'react'
import { Text } from 'react-native'
import { CircleMenu, Container, Logo, Wrapper, MenuIcon } from './styles'

export function Header() {
  return (
    <Container>
      <Wrapper>
      <Logo
        source={require('../../assets/logo.png')}
      />
        <CircleMenu>
          <MenuIcon name="menu" size={21} />
        </CircleMenu>
      </Wrapper>
    </Container>
  )
}
