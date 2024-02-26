import { Box, Button, IconButton, Stack } from "@mui/material"
import Header from "../components/Header"
import DailyCard from "../components/DailyCard"
import "../Styles/home.css"
import RoomCard from "../components/RoomCard"
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3GapFill } from "react-icons/bs";
import data from "../data/roomCard.json"
import { useState } from "react"
import BottomSheet from "../components/BottomSheet"
import loader from "../assets/•••.gif"
import newRoomData from "../data/newRoom.json"

const Home = () => {
    const [itemVisible, setItemVisible] = useState(true)
    const [sheetVisible, setSheetVisible] = useState(false)
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
    const [loaderVisibility, setLoaderVisibility] = useState(false)
    const [cardId, setCardId] = useState(1)
    return (
        <Box>
            {loaderVisibility ? (
                <Stack
                    sx={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img src={loader} alt="" height={200} />
                </Stack>
            ) : (
                ""
            )}
            <Header />
            <Stack className="home__container">
                <DailyCard />
                <RoomCard />
            </Stack>
            <Stack className="home__btn">
                <Button
                    variant="contained"
                    onClick={() => setSheetVisible(true)}
                ><AiOutlinePlus />Start a room</Button>
                <IconButton>
                    <BsGrid3X3GapFill />
                </IconButton>
            </Stack>
            <BottomSheet
                sheetTitle={"start room"}
                setSheetVisible={(item) => setSheetVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail={data.find((item) => item.id === item.cardId)}
                setItemVisible={(item) => setItemVisible(item)}
                setSheetCreateRoom={(item) => {
                    setLoaderVisibility(true)
                    setTimeout(() => {
                        setSheetCreateRoom(item);
                        setLoaderVisibility(false);
                    }, 1000)
                }}
            />
            <BottomSheet
                sheetTitle="new room"
                setSheetVisible={(item) => setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemVisible={(item) => setItemVisible(item)}
            />
        </Box>
    )
}

export default Home