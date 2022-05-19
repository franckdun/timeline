//Components
import Musician from './Musician';

//Material-UI Grid
import Grid from '@mui/material/Grid';

const Musicians = ({ selectedMusicians }) => {
    return (
        <div className="musicians">
            <Grid container spacing={2}>
                {selectedMusicians.map(element => {
                    return <Musician musician={element} />
                })}
            </Grid>
        </div>
    )
}

export default Musicians;