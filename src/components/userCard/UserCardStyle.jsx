import styled from "styled-components";


export  const P = styled.p `
    color: chocolate;
`

export const Ul = styled.ul`
  
  list-style-type: none;
  display: flex;
  justify-content: space-between;
    margin-top: 10px;
  margin-bottom: 10px;
`

export const Li = styled.li`
 width: 33%;
  border-right: 2px solid tomato;
  margin-top: 10px;
  color: darkmagenta;
  :last-child{border-right: none}
`

export const Span=styled.span`display: block`

export const DivProfile = styled.div`
    background: aliceblue;
    width: 300px ;
`

export const Img= styled.img`
   width: 100%;
`
