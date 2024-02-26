import { Box, Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import "../Styles/phoneCom.css"
import PhoneInput from "react-phone-number-input"
import { Link } from "react-router-dom"
import { NavigateBefore, TrendingFlat } from "@mui/icons-material"

const PhoneConfirmation = () => {
    const [value, setValue] = useState()
    return (
        <Box>
            <Stack className={"phone__container"}>
                <Link to={'/'} className="back__btn" ><NavigateBefore /></Link>
                <Stack className="phone__container">
                    <Typography className="phone__head" variant="h3">Enter your phone#</Typography>
                    <PhoneInput international defaultCountry="NG" value={value} onChange={setValue} />
                    <Typography className="phone__text" variant="h6">By entering your number your agreeing to our
                        <Typography className="phone__text" variant="h6" component={"span"}> Terms of Service and Privacy Policy. </Typography>
                        Thanks!
                    </Typography>
                    <Link to={"/confirm"}>
                        <Button variant="contained">
                            Next<TrendingFlat />
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    )
}

export default PhoneConfirmation
