import styled from 'styled-components'
import { responsiveWidth } from '../../../utils/responsiveWidth'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 24px 0 24px ${responsiveWidth(120)};
  align-items: center;
  width: 100vw;
  height: 104px;
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  position: relative

`