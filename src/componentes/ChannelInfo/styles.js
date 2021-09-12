import styled from 'styled-components'
import { Hashtag } from '@styled-icons/fa-solid'


export const Container = styled.div`
grid-area: CI;
display:flex;
align-items: center;
justify-content: start;
flex-direction: row;
background-color: var(--primary);

`

export const HashTagIcon = styled(Hashtag)`
width: 18px;
height: 33px;
color: #FFFFFF;
opacity: 0.3;
margin-left: 10px ;

`
export const FreeChat = styled.div`
font-size: 16px;
color: var(--white);
padding-left: 10px;
`


export const Description = styled.div`

font-size: 15px;
color: var(--gray);
  

`

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;
