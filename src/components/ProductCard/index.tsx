import { Card, Image, Title, Description, Button } from './styles'
import { useState } from 'react'
import ProductModal from '../ProductModal'

type Props = {
  name: string
  description: string
  image: string
  price: number
}

export default function ProductCard(props: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card>
        <Image src={props.image} />
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>

        <Button onClick={() => setIsOpen(true)}>
          Mais detalhes
        </Button>
      </Card>

      {isOpen && (
        <ProductModal
          {...props}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}