import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import dummy from '../images/dummy.jpg'

const InfoCards = ({ data }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            justifyItems="flex-start"
        >
            {data?.items.map(item => (
                
                <Card sx={{ maxWidth: 380 }} className="m-2" key={item.title}>
                    <CardMedia
                        component="img"
                        image={item.pagemap? item.pagemap.cse_image?.length > 0 ? item.pagemap?.cse_image[0]?.src : dummy : dummy}
                        style={{ height: "200px" }}
                    />
                    <CardContent>
                        <Typography component={'span'} ><a className="font-semibold hover:underline" href={item.link}>{item.title}</a></Typography>
                        <Typography component={'span'}><p className="italic pt-2 text-sm">{item.snippet}</p></Typography>
                    </CardContent>
                    <CardActions>
                        <Typography component={'span'}><a className=" text-sm pl-2 hover:underline hover:text-blue-600" href={item.link}>{item.displayLink}</a></Typography>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    )
}

export default InfoCards