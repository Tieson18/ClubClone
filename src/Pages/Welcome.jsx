import { Box, Button, Stack, Typography } from "@mui/material"
import "../Styles/welcome.css"
import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <Box>
            <Stack className="welcome__container">
                <Typography variant="h1">Welcome!</Typography>
                <Stack className="welcome__info">
                    <Typography variant="h6">We're working hard to get clubhouse ready for everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks</Typography>
                    <Typography variant="h6">Anyone can join with an invite from an existing user - or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join!</Typography>
                    <Typography variant="h6">Paul, Rohan & the Clubhouse team</Typography>
                </Stack>
                <Stack className="welcome__links" spacing={2}>
                    <Link to={"/invite"}>
                        <Button variant="contained">Get your username</Button>
                    </Link>
                    <Link>Have an invite text? Sign in</Link>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Welcome 