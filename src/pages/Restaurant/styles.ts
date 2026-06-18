import styled from 'styled-components'

export const Banner = styled.div`
  position: relative;
  height: 280px;
  background-image: url('/massa.jpg');
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: flex-end;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;

  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
`

export const Wrapper = styled.div`
  background-color: #f8e1d9;
  min-height: 100vh;
`

export const Category = styled.span`
  color: #fff;
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 56px 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`