import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "../../../../assets/logo.png";
import { DesktopMainMenu, MaterialUISwitch, MenuLink } from "../styles";
import { toggleTheme } from '../../../../Redux/switchTheme'
import { useDispatch, useSelector } from "react-redux";
import { tgLink, xLink } from "../../../../links";
import { ButtonLink } from "../../../Styles/style";

const DesktopMenu = (props) => {
  const currentTheme = useSelector( (state) => state.LDTheme.value )
  const dispatch = useDispatch();
 
  return (
    <DesktopMainMenu maxWidth="xl">
      <MenuLink href="/" p="0px">
        <img src={logo} width="auto" height='70' alt="Logo" />
      </MenuLink>
      <div>
        {props.menuList.map((value, i) => <MenuLink key={i} href={value.link} target={value.target} className={value.customClass}>{value.title}</MenuLink> )}
        <ButtonLink href={tgLink} target="_blank" style={{marginTop:0, marginLeft: 10}} >Buy $Boscar</ButtonLink>   
      </div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;