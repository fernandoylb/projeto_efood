import { Link } from 'react-router-dom'
import { Card, Image, Content, Title, Description, Button, TitleRow, Rating, Tag, HighlightTag, ImageWrapper } from './styles'

type Props = {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export default function RestaurantCard({
  id,
  title,
  description,
  image,
  category
}: Props) {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} />
        <Tag>{category}</Tag>
        <HighlightTag>Destaque da semana</HighlightTag>
      </ImageWrapper>

      <Content>
        <TitleRow>
          <Title>{title}</Title>
          <Rating>4.9 ⭐</Rating>
        </TitleRow>

        <Description>{description}</Description>

        <Link to={`/restaurant/${id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </Content>
    </Card>
  )
}