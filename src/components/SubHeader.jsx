import { Box, Stack, Typography } from "@mui/material"
import "../Styles/explorer.css"
import PropType from "prop-types"
import { Link } from "react-router-dom"
import { NavigateBefore } from "@mui/icons-material"

const SubHeader = ({ pageTitle, edit, styles }) => {
    return (
        <Box>
            <Stack className="sub__head" sx={{ ...styles }}>
                <Link to={"/home"}><NavigateBefore /></Link>
                <Typography variant="h3">{pageTitle}</Typography>
                {edit}
            </Stack>
        </Box>
    )
}

SubHeader.propTypes = {
    pageTitle: PropType.string,
    edit: PropType.node,
    styles: PropType.object
}

export default SubHeader