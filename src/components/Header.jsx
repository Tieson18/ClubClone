import { LuBellDot } from "react-icons/lu";
import { Avatar, Box, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import { BsEnvelopePaper } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import proPic from "../assets/wallpaper.jpg"
import "../Styles/header.css"
import { Search } from "@mui/icons-material";

const Header = () => {
    return (
        <Box component={"header"}>
            <NavLink to={"/explorer"}> <Search className="link__icon" /></NavLink>
            <Stack direction={"row"} spacing={2}>
                <NavLink><BsEnvelopePaper className="link__icon" /></NavLink>
                <NavLink to={"/upcoming"}><LuCalendarDays className="link__icon" /></NavLink>
                <NavLink to={"/activity"}><LuBellDot className="link__icon" /></NavLink>
                <NavLink to={"/profile"}><Avatar className="link__icon" src={proPic} /></NavLink>
            </Stack>
        </Box >
    )
}

export default Header