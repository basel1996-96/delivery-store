import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const theme = {
  light: {
    textColor: "black", // main font color
    backGroundColor: "#11224B", // main background color
    secoundColor: "gray",
    thirdColor: "#a9f1df",
  },

  dark: {
    textColor: "black", // main font color
    backGroundColor: "#11224B", // main background color
    secoundColor: "#2940d3",
    thirdColor: "#a9f1df",
  },
  reverse: {
    textColor: "black", // main font color
    backGroundColor: "#11224B", // main background color
    secoundColor: "#2940d3",
    thirdColor: "#a9f1df",
  },
};

export const GlobalStyle = createGlobalStyle`


body{
  
  background: url("https://media.istockphoto.com/videos/gray-abstract-minimal-motion-backgrounds-loopable-elements-4k-video-id1173905761?b=1&k=6&m=1173905761&s=640x640&h=LKKv2oNUg9i83Uww5T0OepACFjPt-J_7yqCIG7UBK0U=") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

color:  ${(props) => props.theme.textColor};


}
`;

export const Center = styled.div`
  text-align: center;

  p {
    font-weight: bold;
  }

  h1 {
    font-size: 60px;
    font-family: Brush Script MT;
    margin-top: 50px;
  }
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  margin-top: 50px;
  border-radius:30px;
`;

export const ProductsStyle = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-bottom: 100px;
`;

export const Item = styled.div`
  text-align: center;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4%;
  }

  p {
    font-weight: bold;
  }
`;

export const ItemDetail = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;

  p {
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    margin-left: 50px;
  }
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 300px;
  border: 3px solid;
  border-color: #11224B;
  border-radius: 4%;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  display: block;
  width: 40%;
`;

export const StyledButton = styled.button`
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 12px;
  border: 2px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  font-weight: bold;
  padding: 0px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  margin-bottom: 20px;
  width:40px;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const NavB = styled.nav`
  background-color: ${(props) => props.theme.backGroundColor};
  padding: 5px;
  border-bottom: 0px solid ${(props) => props.theme.thirdColor};
  display: flex;
  justify-content: space-between;
`;
export const LinkItem = styled(NavLink)`
  background-color: ${(props) => props.theme.backGroundColor};
  color: ${(props) => props.theme.textColor};
  border: solid black 2px;
  border-radius: 25px;
  padding: 5px;

  &.active {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.backGroundColor};
    padding: 5px;
    margin: 5px;
    
  }
`;

export const Logo = styled(Link)`
  padding: 5px;
 

  img {
    width: 50px;
    border-radius: 25px;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 5px;
  width: 20px;
`;

export const FlexStyle = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: center;
`;

export const FlexStyleVer = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledButton1 = styled.button`
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 12px;
  border: 2px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  font-weight: bold;
  padding: 0px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  margin-bottom: 20px;
  width:40px;
  font-size: medium;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const mapStyles = {
  width: '100%',
  height: '100%',
};

export const Tit = styled.div`
  color: white;
  font-size: medium;
  padding-top: 10px;
  letter-spacing: 3px;
`;
export const Tit1 = styled.div`
font-family: sans-serif;
  font-size:70px;
  padding-top: 50px;
  letter-spacing: 5px;
`;