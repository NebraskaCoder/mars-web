import NavContainer from "./NavContainer";
import NavBrand from "./NavBrand";
import NavItems from "./NavItems";
import NavItem from "./NavItem";
import NavActions from "./NavActions";

const Nav = () => {
  return (<NavContainer>
    <NavBrand />
    <NavItems>
      <NavItem href="/">Dashboard</NavItem>
      <NavItem href="/contacts">Contacts</NavItem>
    </NavItems>
    <NavActions />
  </NavContainer>)
};

export default Nav;
