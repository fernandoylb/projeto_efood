import styled from 'styled-components'

type Props = {
  variant: 'home' | 'restaurant'
}

export const Container = styled.header<Props>`
  background-color: #FFEBD9;
  padding: ${(props) =>
    props.variant === 'home' ? '40px 0 80px' : '16px 0'};
  text-align: center;
`

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
`

export const Title = styled.h1`
  color: #E66767;
  font-size: 36px;
  max-width: 540px;
  margin: 32px auto 0;
`

export const Nav = styled.div`
  color: #E66767;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #E66767;
  }
`