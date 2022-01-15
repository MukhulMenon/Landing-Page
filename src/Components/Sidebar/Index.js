import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ( {isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={{toggle}}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="github" isOpen={isOpen} onClick={toggle}>Github</SidebarLink>
          <SidebarLink to="react" isOpen={isOpen} onClick={toggle}>React JS</SidebarLink>
          <SidebarLink to="firebase" isOpen={isOpen} onClick={toggle}>Firebase</SidebarLink>
          <SidebarLink to="signup" isOpen={isOpen} onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
