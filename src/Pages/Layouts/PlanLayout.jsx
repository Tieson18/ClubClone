import { Box } from "@mui/material"
import PropTypes from "prop-types"

const PlanLayout = ({ children }) => {
    return (
        <Box className={"plan__layout"}>
            {children}
        </Box>
    )
}

PlanLayout.propTypes = {
    children: PropTypes.node
}

export default PlanLayout