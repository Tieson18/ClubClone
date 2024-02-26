import { Box, Stack, Typography } from "@mui/material"
import SubHeader from "../components/SubHeader"
import data from "../data/activity.json"
import pic from "../assets/wallpaper.jpg"
import "../Styles/activity.css"

const Activity = () => {
    return (
        <Box className="explorer__container" p={0}>
            <Stack className="explorer__header">
                <SubHeader
                    pageTitle={"Activity"}
                    styles={{ marginBottom: 0 }}
                />
            </Stack>
            <Stack spacing={2} p={"0.5em"} mt={6}>
                {data.map((item, index) => (
                    <Stack key={index} className="active__container">
                        <Stack>
                            <img src={pic} alt="" className="active__img" />
                            <Typography>{item.descrpition}</Typography>
                        </Stack>
                        <Typography>{item.time}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Box>
    )
}

export default Activity