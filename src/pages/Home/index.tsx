import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import { Container, Grid, Title } from './styles'

const restaurants = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description: 'O Hioki Sushi é um restaurante japonês que oferece uma variedade de pratos tradicionais, preparados com ingredientes frescos e de alta qualidade.',
    image: '/sushi.jpg',
    category: 'Japonesa'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita é uma tradicional trattoria italiana que oferece pratos autênticos e deliciosos, preparados com ingredientes frescos e de alta qualidade.',
    image: '/massa.jpg',
    category: 'Italiana'
  }
]

export default function Home() {
  return (
    <>
      <Header variant="home" />

      <Container>
        <Title>
        </Title>

        <Grid>
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}