import styled from 'styled-components'
import { motion } from 'framer-motion'

// common
import { BodySubTitle, BodySubTitleRegular, textOverflowEllipsis } from '../../../styles/common'

export const Container = styled(motion.div)`
  width: 850px;
  position: absolute;
  top: 32px;
  margin: 0 0 32px;
  border-radius: 6px;
  overflow: hidden;
`

export const PlayerContainer = styled.div`
  position: relative;
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  z-index: 2;

  svg {
    width: 36px;
    height: 36px;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.coalBlack};
  padding: 16px 48px 28px;
  color: ${({ theme }) => theme.colors.white};
`

export const ContentHeader = styled.h3`
  ${BodySubTitle};
  margin: 16px 0 32px;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Preview = styled.div`
  flex: 0 0 20%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  svg {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease-in;
  }
`

export const Item = styled.li<{ isCurrent?: boolean }>`
  min-height: 150px;
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
  border-radius: 4px;
  ${({ isCurrent, theme }) => isCurrent && `background-color: ${theme.colors.deepGray}`};
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.deepGray};

    ${Preview} {
      svg {
        opacity: 1;
      }
    }
  }
`

export const Counter = styled.div`
  ${BodySubTitle};
  color: ${({ theme }) => theme.colors.lightGraySilver};
  flex: 0 0 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
`

export const Info = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    ${BodySubTitleRegular};
    ${textOverflowEllipsis(1)};
  }
`

export const SubInfo = styled.div<{ hasBorder?: boolean }>`
  span {
    &:first-of-type {
      color: ${({ theme }) => theme.colors.scaleGray};
      margin: 0 4px 0;
    }

    &:last-of-type {
      color: ${({ theme }) => theme.colors.lightGraySilver};
      ${({ hasBorder, theme }) => hasBorder && `border: 1px solid ${theme.colors.scaleGray}`};
      ${({ hasBorder }) => hasBorder && 'padding: 0 5.8px'};
    }
  }
`

export const CollapseBtnWrapper = styled.div`
  display: flex;
  border: ${({ theme }) => `1px solid ${theme.colors.scaleGray}`};
  height: 0;
  position: relative;
`

export const CollapseBtn = styled.button<{ isExpanded?: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border: 2px solid ;
  border: ${({ theme }) => `2px solid ${theme.colors.scaleGray}`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.semiTransparentDarkGray}};

  svg {
    width: 22px;
    height: 22px;
    ${({ isExpanded }) => !isExpanded && 'transform: rotate(180deg)'};
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
  }
`
