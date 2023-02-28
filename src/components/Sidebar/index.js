import React from 'react'
import { SidebarContainer, 
		Icon, 
		CloseIcon, 
		SidebarWrapper,
		SidebarMenu,
		SidebarLink,
		SideBtnWrap,
		SidebarRoute 
} from './SidebarElements'  

const Sidebar = ({ isOpen, toggle }) => {
  return (
	<SidebarContainer isOpen={isOpen} onClick={toggle}>
		<Icon onClick={toggle}>
			<CloseIcon />
		</Icon>
		<SidebarWrapper>
			<SidebarMenu>
			   
				<SidebarLink to="/Welcome">Home</SidebarLink>
				<SidebarLink to="/Pantry">Pantry</SidebarLink>
				<SidebarLink to="/MealPlanner">Meal Planner</SidebarLink>
				<SidebarLink to="/Mixology">Mixology</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to="/Login">Sign Up</SidebarRoute>
			</SideBtnWrap>
		</SidebarWrapper>
	</SidebarContainer>
  )
}

export default Sidebar