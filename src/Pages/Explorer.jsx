import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import "../Styles/explorer.css"
import data from "../data/explorer.json"
import Pic from "../assets/wallpaper.jpg"
import { DownOutlined, FireOutlined } from "@ant-design/icons"
import Input from "antd/es/input/Input"
import { Search } from "@mui/icons-material"
import SubHeader from "../components/SubHeader"

const Explorer = () => {
    const { people, conversations } = data

    return (
        <Box className="explorer__container">
            <Stack className="explorer__header">
                <SubHeader pageTitle={"EXPLORE"} />
                <form action="">
                    <Input
                        style={{
                            backgroundColor: "#f4f4f4",
                            borderRadius: "0.8em",
                            padding: "0.3em 1em",
                            border: "none",
                            boxShadow: "none",
                        }}
                        size="large"
                        placeholder="Find People and Clubs"
                        prefix={<Search />}
                    ></Input>
                </form>
            </Stack>
            <Typography variant="h6">PEOPLE TO FOLLOW</Typography>
            <Stack className="people__container">
                {people.map((person, index) => (
                    <Stack key={index}>
                        <Stack alignItems={"center"} direction={"row"}>
                            <img src={Pic} alt="" />
                            <Stack ml={2}>
                                <Typography variant="h5">{person.title}</Typography>
                                <Typography>{person.description}</Typography>

                            </Stack>
                        </Stack>
                        <Button variant="outlined">Follow</Button>
                    </Stack>
                ))}
                <Button className="show__more" variant="contained">Show more people <DownOutlined /></Button>
            </Stack>
            <Typography variant="h6">FIND CONVERSATION ABOUT ...</Typography>

            <Stack px={2} mb={3}>
                <Grid container gap={2} justifyContent={"center"}>
                    {conversations.map((conversation, index) => (
                        <Grid key={index} item xs={5.7} md={5.7} className="conversation__card">
                            <Typography variant="h6">
                                <FireOutlined />
                                {conversation.title}
                            </Typography>
                            <Typography>{conversation.description}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Box>
    )
}

export default Explorer