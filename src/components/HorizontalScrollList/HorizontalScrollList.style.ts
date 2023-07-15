import styled from 'styled-components'

export const Container = styled.section`
  overflow-x: scroll;
  // 只會影響第一層項目
  display: flex;
  align-items: center;
  gap: 38px;
  // 隱藏 scroll 滾輪
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  overscroll-behavior: contain;
`

export const ItemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
`

export const Item = styled.div`
  width: 470px;
  height: 230px;
  position: relative;
`
