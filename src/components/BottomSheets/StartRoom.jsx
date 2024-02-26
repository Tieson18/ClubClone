import { useState } from "react";
import { FcGlobe } from "react-icons/fc";
import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import "../../Styles/bottomSheet.css"

const StartRoom = ({ setSheetCreateRoom, setSheetVisible }) => {
    const [room, setRoom] = useState("open")

    const globeBtn = [
        {
            state: "open",
        },
        {
            state: "social",
        },
        {
            state: "closed",
        },
    ]

    console.log(room);

    return (
        <Stack>
            <Stack className="switch__line"></Stack>
            <Stack alignItems={"flex-end"}>
                <Button className="topic__btn">
                    + Add a topic
                </Button>
            </Stack>
            <Stack className="select__room">
                {
                    globeBtn.map((set, index) => (
                        <Stack key={index}>
                            <Button
                                sx={{ display: "flex", flexDirection: "column" }}
                                className={room == set.state ? "active__btn" : ""}
                                onClick={() => setRoom(set.state)}
                            >
                                <Stack>
                                    <FcGlobe />
                                </Stack>
                                {set.state}
                            </Button>
                        </Stack>
                    ))
                }
            </Stack>
            <Typography>
                Start a room
                <Typography component={"span"}>
                    {room == 'closed'
                        ? " for people I choose"
                        : room == 'social'
                            ? ' for people I follow'
                            : ' open to everyone'}
                </Typography>
            </Typography>
            <Stack alignItems={"center"}>
                <Button className="lg__btn"
                    onClick={() => {
                        setSheetCreateRoom(true);
                        setSheetVisible(true);
                    }}
                // eslint-disable-next-line react/no-unescaped-entities
                >🎉Let's go</Button>

            </Stack>
        </Stack>
    )
}

StartRoom.propTypes = {
    setSheetCreateRoom: PropTypes.func,
    setSheetVisible: PropTypes.func
}

export default StartRoom