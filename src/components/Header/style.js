import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 104px;
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  position: relative

`