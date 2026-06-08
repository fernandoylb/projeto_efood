import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  background-color: #e66767;
  padding: 24px;
  display: flex;
  gap: 16px;
  width: 600px;
  color: #fff;
  position: relative;
`

export const Image = styled.img`
  width: 200px;
`

export const Content = styled.div`
  flex: 1;
`

export const Close = styled.span`
  position: absolute;
  top: 8px;
  right: 12px;
  cursor: pointer;
`

export const Button = styled.button`
  margin-top: 16px;
  background-color: #fff;
  color: #e66767;
  border: none;
  padding: 8px;
`