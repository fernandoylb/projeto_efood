import {
  Overlay,
  ModalContainer,
  Image,
  Content,
  Close,
  Button
} from './styles'

type Props = {
  name: string
  description: string
  image: string
  price: number
  onClose: () => void
}

export default function ProductModal({
  name,
  description,
  image,
  price,
  onClose
}: Props) {
  return (
    <Overlay>
      <ModalContainer>
        <Close onClick={onClose}>X</Close>

        <Image src={image} />

        <Content>
          <h2>{name}</h2>
          <p>{description}</p>

          <Button>
            Adicionar ao carrinho - R$ {price.toFixed(2)}
          </Button>
        </Content>
      </ModalContainer>
    </Overlay>
  )
}