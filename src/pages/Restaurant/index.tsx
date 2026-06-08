import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import { Wrapper, Banner, Container, Grid, Title, Category } from './styles'

const products = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate, mussarela derretida e manjericão fresco.',
    image: '/pizza-marguerita.jpg',
    price: 60.9
  },
  {
    id: 2,
    name: 'Pizza de Pepperoni',
    description: 'Deliciosa pizza de Pepperoni tradicional.',
    image: '/pizza-pepperoni.jpg',
    price: 60.9
  }
]

export default function Restaurant() {
  return (
    <Wrapper>
      <Header />

      <Banner>
        <Category>Italiana</Category>
        <Title>La Dolce Vita Trattoria</Title>
      </Banner>

      <Container>
        <Grid>
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}