import { Box, Button, Stack, Typography } from "@mui/material"
import "../Styles/phoneCom.css"
import { Link } from "react-router-dom"
import { NavigateBefore, TrendingFlat } from "@mui/icons-material"


const CodeConfirm = () => {
    return (
        <Box>
            <Stack className="phone__container">
                <Link to={'/invite'} className="back__btn" ><NavigateBefore /></Link>
                <Stack textAlign={"center"} >
                    <Typography className="phone__head" width={"100%"} maxWidth={"200px"} mb={2}>Enter the code we just texted you</Typography>
                    <input type="text" style={{ width: "100%", border: "none", outline: "none", textAlign: "center" }} />
                    <Typography className="phone__text">Didn't receive it?<Typography className="phone__text" component={"span"}> Tap to resend</Typography></Typography>
                    <Link to={"/notification"}>
                        <Button variant="contained">
                            Next<TrendingFlat />
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CodeConfirm
