import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { Container, Grid, Title } from './styles'

const restaurants = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description: 'Sushis frescos e saborosos.',
    image: '/sushi.jpg'
  },
  {
    id: 2,
    title: 'La Dolce Vita',
    description: 'Massas italianas incríveis.',
    image: '/massa.jpg'
  }
]

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <Title>
          Viva experiências gastronômicas no conforto da sua casa
        </Title>

        <Grid>
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </Grid>
      </Container>
    </>
  )
}