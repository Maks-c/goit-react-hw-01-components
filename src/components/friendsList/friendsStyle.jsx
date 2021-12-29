import styled from "styled-components";


export const Ul=styled.ul`

  margin-top: 10px;
  margin-bottom: 20px;
  list-style-type: none;
  margin-left: 0;
`

export const Li=styled.li`
  display: flex;
  align-items: center;
  width: 330px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #00ff5a;
  border-radius:16px;
  box-shadow:inset -5px -5px 5px 0 rgba(0,0,0,.5),
  inset 5px 5px 5px 0 rgba(255,255,255,0.5);

 

  
  
  
`

export const Image=styled.img`
  
  width: 100px;
  height: 100px;
  margin-left: 10px;
  background-size: cover;
  background-position: center;
`

export const Span=styled.span`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: ${({isOnline})=>{
      return isOnline ?  'green' : `red`;
  }
  };
  display: block;
`

export const P=styled.p`
margin-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.03em;
`