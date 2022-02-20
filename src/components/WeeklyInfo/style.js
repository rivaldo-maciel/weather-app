import  styled from 'styled-components';
import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp';
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';

export const Max = styled.p`
  color: red;
`
export const Min = styled.p`
  color: blue;
`
export const MaxIcon = styled(ArrowUp)`
  color: red;
  height: 14px;
`
export const MinIcon = styled(ArrowDown)`
  color: blue;
  height: 14px;
`