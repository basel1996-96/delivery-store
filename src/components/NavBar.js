// import { Link } from "react-router-dom";
import { NavB, Logo,Tit,Center1 } from "../styles";

const NavBar = (props) => {
  return (
    <NavB class="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/"><Center1>
        <img
          src="https://uxrecipe.github.io/img/uxrecipe-logo.png"
          alt="logo"
        ></img>
        </Center1>
      </Logo>
     
      <Logo exact to="/products">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZqFxmRjkzbz3pHU0apkWsNi9WPYaoPBoNQ&usqp=CAU"
          alt="logo"
        ></img>
      </Logo>
      
    </NavB>
  );
};

export default NavBar;
