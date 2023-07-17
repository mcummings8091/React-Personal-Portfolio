import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  background-image: linear-gradient(
    0deg,
    rgba(105, 105, 105, 60%),
    rgba(105, 105, 105, 60%)
  );
`;

const NavItem = styled.li`
  position: relative;

  &::after {
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover::after {
    content: "";
    opacity: 1;
    height: 2px;
    width: 100%;
    background-color: lime;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Navbar = () => {
  return (
    <StyledNav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Matthew Cummings
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </NavItem>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
