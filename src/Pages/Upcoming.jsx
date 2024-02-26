import { Box, Stack, Typography } from "@mui/material"
import "../Styles/explorer.css"
import "../Styles/upcoming.css"
import SubHeader from "../components/SubHeader"
import { CalendarOutlined } from "@ant-design/icons"
import data from "../data/upcoming.json"
import pic1 from "../assets/AnimeX_788123.jpeg"
import pic2 from "../assets/wallpaper.jpg"
import { IoMdNotificationsOutline } from "react-icons/io";
import BottomSheet from "../components/BottomSheet"
import { useState } from "react"

const Upcoming = () => {
    const [sheetJoinRoom, setSheetJoinRoom] = useState(false)
    const [itemVisible, setItemVisible] = useState(true)
    const [time, setTime] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [avatars, setAvatars] = useState([])

    const pics = [pic1, pic2]

    const handleClick = (info) => {
        setSheetJoinRoom(true);
        setTime(info.time)
        setTitle(info.title)
        setDescription(info.description)
        setAvatars(pics)
    }

    return (
        <Box className={"explorer__container"} p={0}>
            <Stack className="explorer__header">
                <SubHeader pageTitle={"UPCOMING FOR YOU"}
                    styles={{ justifyContent: "space-between", marginBottom: -2, }}
                    edit={<CalendarOutlined />}
                />
                <Typography variant="h6" color={"black !important"} bgcolor={"lightgray"} >TODAY</Typography>
            </Stack>
            <Stack mt={12} spacing={2}>
                {data.map((info, index) => (
                    <Stack key={index} onClick={() => handleClick(info)} className="upcom__container">
                        <Typography>{info.time}<Typography component={"span"}><IoMdNotificationsOutline /></Typography></Typography>
                        <Typography variant="h5">{info.title}</Typography>
                        <Stack direction={"row"} spacing={.8}>
                            {pics.map((pic, index) => (
                                <img key={index} src={pic} className="upcome__img" alt="" />
                            ))}
                            {pics.map((pic, index) => (
                                <img key={index} src={pic} className="upcome__img" alt="" />
                            ))}
                        </Stack>
                        <Typography>{info.description}</Typography>
                    </Stack>
                ))}
            </Stack>
            <BottomSheet
                sheetTitle={"join room"}
                setSheetVisible={(item) => setSheetJoinRoom(item)}
                sheetVisible={sheetJoinRoom}
                setItemVisible={(item) => setItemVisible(item)}
                time={time}
                title={title}
                description={description}
                avatars={avatars}
            />
        </Box>
    )
}

export default Upcoming