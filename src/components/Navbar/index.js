import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink
} from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
	<>
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					pantrillo
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLinks to='/Welcome'>Home</NavLinks>

					</NavItem>

					<NavItem>
						<NavLinks to='/MealPlanner'>
							Meal Planner
						</NavLinks>

					</NavItem>

					<NavItem>
						<NavLinks to='/Mixology'>
							Mixology
						</NavLinks>

					</NavItem>

				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/">Sign In</NavBtnLink>
				</NavBtn>

			</NavbarContainer>
		</Nav>
	</>
  )
}

export default Navbar