import { Box, Stack, Typography } from '@mui/material'
import '../Styles/dailyCard.css'
import data from "../data/dailyCard.json"

const DailyCard = () => {
    return (
        <Box className="daily__card">
            {data.map((item, index) => (
                <Stack key={index}>
                    <Typography component={"span"} fontFamily={"Neutrif Pro"} >{item.time}</Typography>
                    <Stack>
                        <Typography component={"span"} fontFamily={"Neutrif Pro"} >{item.title}</Typography>
                        <Typography fontFamily={"Neutrif Pro"} >{item.description}</Typography>
                    </Stack>
                </Stack>
            ))}
        </Box>
    )
}

export default DailyCard