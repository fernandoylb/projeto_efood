import styled from 'styled-components'

export const Banner = styled.div`
  background-image: url('/Macarrao-ao-molho-branco.jpg');
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  color: #fff;
`
export const Wrapper = styled.div`
  background-color: #f8e1d9;
  min-height: 100vh;
`

export const Category = styled.span`
  font-size: 18px;
`

export const Title = styled.h1`
  font-size: 32px;
`

export const Container = styled.div`
  padding: 40px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`