import styled from "styled-components";
import GetRandomHexColor from "../../helpers/helpers";
export const Section = styled.section`
    width: 295px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: aqua;
`
export const H2 = styled.h2`
    color: crimson;
    padding-top: 5px;
    margin-bottom: 5px;
`

export const Ul=styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: space-between;
  justify-content: center;
`

export const Li= styled.li`
  display:inline-block;
  padding: 18px 11px;
    background-color: ${GetRandomHexColor};
    list-style-type: none;
`


export const Span=styled.span`
display: flex;
`
