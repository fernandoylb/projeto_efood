import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
`

export const Title = styled.h1`
  text-align: center;
  color: #e66767;
  margin-bottom: 32px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`