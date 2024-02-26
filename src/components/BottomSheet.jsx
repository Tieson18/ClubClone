import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import "../Styles/BottomSheet.css"
import PropTypes from 'prop-types'
import { Stack } from '@mui/material'
import StartRoom from './bottomSheets/StartRoom'
import NewRoom from './BottomSheets/NewRoom'
import JoinRoom from './BottomSheets/JoinRoom'

const BottomSheet = ({ setSheetVisible, sheetVisible, setItemVisible, sheetTitle, setSheetCreateRoom, cardDetail, time, title, description, avatars }) => {
    return (
        <SwipeableBottomSheet
            open={sheetVisible}
            onChange={() => {
                setSheetVisible(!sheetVisible)
                setItemVisible(true)
            }}
            fullScreen={sheetTitle == 'room detail' ? true : false}
        >
            <Stack className='sheet__container' bgcolor={sheetTitle == 'profile' ? 'transparent' : ''}>
                {sheetTitle == 'start room' ? (
                    <StartRoom
                        setSheetCreateRoom={setSheetCreateRoom}
                        setSheetVisible={(item) => {
                            setSheetVisible(item);
                            console.log(item);
                            setItemVisible(true)
                        }}
                    />

                ) : sheetTitle == 'new room' ? (
                    <NewRoom
                        cardDetail={cardDetail}
                        setSheetVisible={(item) => {
                            setSheetVisible(item);
                            console.log(item);
                            setItemVisible(true)
                        }}
                    />
                ) : sheetTitle == 'join room' ? (
                    <JoinRoom
                        time={time}
                        title={title}
                        description={description}
                        avatars={avatars}
                        setSheetVisible={(item) => {
                            setSheetVisible(item);
                            console.log(item);
                            setItemVisible(true)
                        }}
                    />
                ) :
                    ("")}
            </Stack>
        </SwipeableBottomSheet >
    )
}

BottomSheet.propTypes = {
    setSheetVisible: PropTypes.func,
    sheetVisible: PropTypes.bool,
    setItemVisible: PropTypes.func,
    sheetTitle: PropTypes.string,
    setSheetCreateRoom: PropTypes.func,
    cardDetail: PropTypes.object,
    time: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    avatars: PropTypes.array
}

export default BottomSheet
