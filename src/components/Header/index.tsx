import { Container, Content, Logo, Nav, Title } from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

type Props = {
  variant?: 'home' | 'restaurant'
}

export default function Header({ variant = 'home' }: Props) {
  if (variant === 'home') {
    return (
      <Container variant="home">
        <Logo src={logo} />
        <Title>
          Viva experiências gastronômicas no conforto da sua casa
        </Title>
      </Container>
    )
  }

  return (
    <Container variant="restaurant">
      <Content>
        <Nav>
          <Link to="/">Restaurantes</Link>
        </Nav>

        <Logo src={logo} />

        <Nav>0 produto(s) no carrinho</Nav>
      </Content>
    </Container>
  )
}