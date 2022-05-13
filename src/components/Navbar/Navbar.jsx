const Navbar = () => {

return (
   <>
       <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    pantrillo
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/home'>Home</NavLinks>

                    </NavItem>

                    <NavItem>
                        <NavLinks to='/about'>
                            About
                        </NavLinks>

                    </NavItem>

                    <NavItem>
                        <NavLinks to='mealplanner'>
                            Meal Planner
                        </NavLinks>

                    </NavItem>

                    <NavItem>
                        <NavLinks to='about'>
                            Sign Up
                        </NavLinks>

                    </NavItem>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>

            </NavbarContainer>
        </Nav>
       </>
    )
}





















  export default Navbar