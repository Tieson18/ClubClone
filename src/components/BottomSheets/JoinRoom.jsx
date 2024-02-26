import { Box, Button, Stack, Typography } from "@mui/material"
import { IoMdNotificationsOutline } from "react-icons/io";
import PropType from "prop-types"
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { MdOutlineFileCopy } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";
import "../../Styles/joinRoom.css"
import "../../Styles/upcoming.css"

const JoinRoom = ({ time, title, description, avatars, }) => {

    const joinSocial = [
        {
            icon: <AiOutlineUpload />,
            text: "share"
        },
        {
            icon: <BsTwitter />,
            text: "Tweet"
        },
        {
            icon: <MdOutlineFileCopy />,
            text: "Copy Link"
        },
        {
            icon: <MdOutlineFileCopy />,
            text: "Add to cell"
        }
    ]

    return (
        <Box className="join__container">
            <Stack className="switch__line"></Stack>
            <Stack className="upcom__container" mt={2} mb={2}>
                <Typography>Today {time}<Typography component={"span"}><IoMdNotificationsOutline /></Typography></Typography>
                <Typography variant="h5">{title}</Typography>
                <Stack direction={"row"} spacing={.8}>
                    {avatars.map((pic, index) => (
                        <img key={index} src={pic} className="upcome__img" alt="" />
                    ))}
                    {avatars.map((pic, index) => (
                        <img key={index} src={pic} className="upcome__img" alt="" />
                    ))}
                </Stack>
                <Typography>{description}</Typography>
            </Stack>
            <Stack direction={"row"}>
                {joinSocial.map((social, index) => (
                    <Link key={index}>{social.icon}{social.text}</Link>
                ))}
            </Stack>
            <Button variant={"contained"} onClick={() => { }}>Join the room in progress</Button>
        </Box>
    )
}

JoinRoom.propTypes = {
    time: PropType.string,
    title: PropType.string,
    description: PropType.string,
    avatars: PropType.array,
}

export default JoinRoom