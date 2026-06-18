import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'
import { Wrapper, Banner, Overlay, BannerContent, Container, Grid, Title, Category } from './styles'

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
    description: 'Deliciosa pizza de Pepperoni tradicional, com mussarela derretida e um delicioso pepperoni.',
    image: '/pizza-pepperoni.jpg',
    price: 64.9
  },
  {
    id: 3,
    name: 'Pizza de Calabresa',
    description: 'Saborosa pizza de Calabresa, com mussarela derretida e fatias de calabresa apimentada.',
    image: '/pizza-calabresa.jpg',
    price: 55.9
  }
]

export default function Restaurant() {
  return (
    <Wrapper>
      <Header variant="restaurant" />

    <Banner>
      <Overlay />

      <BannerContent>
        <Category>Italiana</Category>
        <Title>La Dolce Vita Trattoria</Title>
      </BannerContent>
    </Banner>

      <Container>
        <Grid>
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Wrapper>
  )
}