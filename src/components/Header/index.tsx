import { Container, Logo, Nav } from './styles'

export default function Header() {
  return (
    <Container>
      <Nav>Restaurantes</Nav>
      <Logo>efood</Logo>
      <Nav>0 produto(s) no carrinho</Nav>
    </Container>
  )
}