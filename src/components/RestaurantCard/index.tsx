import { Card, Image, Title, Description, Button } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  description: string
  image: string
}

export default function RestaurantCard({
  id,
  title,
  description,
  image
}: Props) {
  return (
    <Card>
      <Image src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Link to={`/restaurant/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </Card>
  )
}