import { Box, Stack, Typography } from '@mui/material'
import '../Styles/phoneCom.css'
import { Link } from 'react-router-dom'
import { PanToolAlt } from '@mui/icons-material'

const AllowNotification = () => {
    const links = [
        {
            text: "Don't Allow",
            link: "/"
        },
        {
            text: "Allow",
            link: "/home"
        }
    ]

    const club = `"Clubhouse Would Like to Send You Notification"`
    return (
        <Box>
            <Stack className='phone__container'>
                <Stack textAlign={"center"}>
                    <Typography className='phone__head' mb={4}>Last, Important step!</Typography>
                    <Typography className='phone__head' mb={3}>Enable notification to know when people are taking</Typography>
                    <Stack className='not__container'>
                        <Stack p={3} >
                            <Typography variant='h3'>{club}</Typography>
                            <Typography>Notification may include alerts, sounds, and icon badges</Typography>
                        </Stack>
                        <Stack className='action__btn'>
                            {links.map((link, index) => (
                                <Link key={index} to={link.link}>{link.text}</Link>
                            ))}
                            <PanToolAlt className='hand__icon' />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default AllowNotification