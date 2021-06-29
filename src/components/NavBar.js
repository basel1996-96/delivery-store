// import { Link } from "react-router-dom";
import { NavB, Logo,Tit } from "../styles";

const NavBar = (props) => {
  return (
    <NavB class="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/">
        <img
          src="https://thumbs.dreamstime.com/b/design-can-be-used-as-logo-icon-as-complement-to-design-medicine-box-logo-icon-design-124672379.jpg"
          alt="logo"
        ></img>
      </Logo>
      <div><Tit> ** Straight-up digital delivery will be the way the future works ** </Tit></div>
      <Logo exact to="/products">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYOOt7LqtvARICg9ujN8vTStCTUE2Wfx0I80yXEmoz-qSh1hFLukf3L295yHx4uEs2Mg&usqp=CAU"
          alt="logo"
        ></img>
      </Logo>
      
    </NavB>
  );
};

export default NavBar;
