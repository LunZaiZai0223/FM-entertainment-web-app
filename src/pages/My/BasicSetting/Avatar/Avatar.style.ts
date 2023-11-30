import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 14px;
`

export const AvatarContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;

  img {
    cursor: pointer;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  > span {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;

    span {
      height: 100%;
    }
  }
`

export const ButtonWrapper = styled.div``
