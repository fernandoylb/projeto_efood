import { Container, Logo, Icons, Text } from './styles'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <Container>
      <Logo src={logo} />

      <Icons>
        <span>📷</span>
        <span>👍</span>
        <span>🐦</span>
      </Icons>

      <Text>
        A eFood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </Container>
  )
}