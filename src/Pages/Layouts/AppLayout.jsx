import { Box, Stack } from "@mui/material"
import PropTypes from "prop-types"
import { clubhouse } from "../utils/Color"

const AppLayout = ({ children }) => {
    return (
        <Stack bgcolor={clubhouse} className="app__layout">
            {children}
        </Stack>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node
}

export default AppLayout