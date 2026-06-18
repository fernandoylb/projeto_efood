import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #E66767;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Title = styled.h2`
  color: #e66767;
  margin: 8px 0;
`

export const Content = styled.div`
  padding: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 8px 0 16px;
  line-height: 20px;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Rating = styled.span`
  font-size: 18px;
  color: #E66767;
`

export const Button = styled.button`
  background-color: #E66767;
  color: #fff;
  border: none;
  padding: 6px 12px;
  font-size: 14px;
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const Tag = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: #E66767;
  color: #fff;

  font-size: 12px;
  font-weight: bold;

  padding: 4px 8px;
`
export const HighlightTag = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;

  background-color: #E66767;
  color: #fff;

  font-size: 12px;
  font-weight: bold;

  padding: 4px 8px;
`