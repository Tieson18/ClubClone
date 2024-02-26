import { Box, Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { NavigateBefore } from "@mui/icons-material"
import { BsAt, BsPlus, BsUpload } from "react-icons/bs"
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai"
import pic from "../assets/wallpaper.jpg"
import "../Styles/explorer.css"
import "../Styles/profile.css"

const Profile = () => {
    return (
        <Box className="profile__container">
            <Stack className="explorer__header">
                <Stack className="sub__head" mb={0} textAlign={"right"} justifyContent={"space-between"}>
                    <Link to={"/home"}><NavigateBefore /></Link>
                    <Stack className="act__btn">
                        <BsAt />
                        <BsUpload />
                        <AiOutlineSetting />
                    </Stack>
                </Stack>
            </Stack>
            <img src={pic} className="pro__img" alt="" />
            <Typography variant="h4">Tieson Victor</Typography>
            <Typography>@tieson360</Typography>
            <Stack className="pro__follow">
                <Typography><Typography component={"span"}>0</Typography> followers</Typography>
                <Typography><Typography component={"span"}>51</Typography> following</Typography>
            </Stack>
            <Button>Add a bio</Button>
            <Stack mb={4} direction={"row"}>
                <Button>
                    <AiOutlineTwitter />Add Twitter
                </Button>
                <Button>
                    <AiOutlineInstagram />Add Twitter
                </Button>
            </Stack>
            <Stack className="pro__nominated">
                <img src={pic} alt="" />
                <Stack>
                    <Typography>Joined 14-July-2024</Typography>
                    <Typography>Nominated by <Typography component={"span"}>Anton Alaron</Typography></Typography>
                </Stack>
            </Stack>
            <Typography>Member of</Typography>
            <Button className="addMember__btn "><BsPlus /></Button>
        </Box>
    )
}

export default Profile