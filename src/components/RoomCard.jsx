import { Box, Stack, Typography } from '@mui/material'
import data from '../data/roomCard.json'
import '../Styles/roomCard.css'
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import pic1 from "../assets/AnimeX_788123.jpeg"
import pic2 from "../assets/wallpaper.jpg"

const RoomCard = () => {
    return (
        <Box>
            {data.map((item, index) => (
                <Stack key={index} spacing={1}>
                    <Stack className='room__container'>
                        <Typography>{item.title}</Typography>
                        <Typography variant='h2'>{item.sub_title}</Typography>
                        <Stack className='room__members'>
                            <Stack direction={"row"}>
                                <img src={pic1} alt="" />
                                <img src={pic2} alt="" />
                            </Stack>
                            <Stack>
                                {item.members.map((person, index) => (
                                    <Typography key={index}>
                                        {person.first_name}
                                        {person.last_name}
                                        <BsChatDots />
                                    </Typography>
                                ))}
                                <Typography display={"flex"} alignItems={'center'}>
                                    <Typography component={'span'}>1.8</Typography>
                                    <BsFillPersonFill />
                                    <Typography component={'span'} m={{ margin: '0, 1' }}></Typography>
                                    <Typography component={'span'} m={0.5}>5</Typography>
                                    <BsChatDotsFill />
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            ))
            }

        </Box >
    )
}

export default RoomCard  