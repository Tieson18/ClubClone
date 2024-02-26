import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill } from "react-icons/bs";
import { Avatar, Box, Button, IconButton, Stack, Typography } from "@mui/material";
import "../../Styles/roomDetail.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Add, Mic, NavigateBefore, } from "@mui/icons-material";
import Pic from "../../assets/react.svg"
import HandPeace from "../../assets/peace-sign.png"
import StopHand from "../../assets/StopHand.png"
import card from "../../data/newRoom.json"

const NewRoom = ({ setSheetVisible }) => {
    const [micMute, setMicMute] = useState(false)
    const [itemVisible, setItemVisible] = useState(true)

    // const card = cardDetail
    return (
        <Box>
            <Stack className={'room__container'}>
                <Stack className="room__head">
                    <Stack direction={"row"} alignItems={"centers"}>
                        <Link onClick={() => { setSheetVisible(false) }}>
                            <NavigateBefore className="arrow__icon" />
                        </Link>
                        <Typography component={"span"}>Hallway</Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <AiOutlineFile />
                        <Avatar className="profile__img">
                            <img src={Pic} alt="" />
                        </Avatar>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className="room__card">
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} p={"0.5em 1em"}>
                    {card.members.map((member, index) => (
                        <Stack key={index} className="member__container">
                            {micMute ? (
                                <Stack className="audio__icon">
                                    <BsMicMuteFill />
                                </Stack>
                            ) : null}
                            <img src={Pic} alt="" />
                            <Typography>
                                <Typography component={"span"}>*</Typography>
                                {member.firstName}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            <Stack className="room__footer">
                <Button onClick={() => { setSheetVisible(false) }}>
                    <img src={HandPeace} alt="" />
                    Leave Quietly
                </Button>
                <Stack direction={"row"} m={3}>
                    <IconButton>
                        <Add sx={{ fontSize: "1.5em" }} />
                    </IconButton>
                    <IconButton>
                        <img src={StopHand} alt="" />
                    </IconButton>
                    <IconButton on onClick={() => setMicMute(!micMute)}>
                        {micMute ? <BsMicMuteFill /> : <Mic sx={{ fontSize: "1em" }} />}
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

NewRoom.propTypes = {
    setSheetVisible: PropTypes.func
}

export default NewRoom