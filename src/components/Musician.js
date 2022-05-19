//Material-UI Grid
import Grid from "@mui/material/Grid";
//Material-UI Card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Musician = ({ musician }) => {
    return (
        <Grid item xs={12} md={3} key={musician.id}>
            <Card
            // sx={{ maxWidth: 345 }}
            >
                <CardMedia
                    className="img_musician"
                    component="img"
                    height="200"
                    image={musician.image}
                    alt={musician.name}
                    title={musician.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {musician.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {musician.description.substring(0, 200)} ...
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Share</Button> */}
                    <a href={musician.link} target="_blank" >
                        <Button size="small" >Learn More</Button>
                    </a>
                </CardActions>
            </Card>
            {/* <div className="musician" >
                <img src={musician.image} alt={musician.id} />
                <h2>{musician.name}</h2>
                <p>{musician.description}</p>
            </div> */}
        </Grid>
    )
}

export default Musician;