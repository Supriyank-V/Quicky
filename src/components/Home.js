import Search from './Search'
import dummy from '../images/dummy.jpg' 
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import Helmet from 'react-helmet'

const Home = () => {
    return(
        <div className="flex flex-col justify-between h-[100%] md:h-[100vh] home">
            <Helmet>
                <title>Quicky</title>
            </Helmet>
            <nav className="flex flex-row pt-2 justify-center">
                {[
                    ['EverChat', ''],
                    ['CoviTrac', ''],
                    ['CrypTransfer', 'https://cryptransfer.netlify.com/'],
                    ['DestExplorer', ''],
                ].map(([title, url]) => (
                    <a key={title} href={url} className="rounded-sm px-2 py-2 text-white text-xs md:text-base hover:bg-slate-100 hover:text-slate-900">{title}</a>
                ))}
            </nav>
            <div className="flex flex-col">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    justifyItems="flex-start"
                >
                <Card sx={{ maxWidth: 380, maxHeight: 400 }} className="m-2 w-[75%] h-[75%] md:w-[100%] md:h-[100%]">
                    <CardMedia
                            component="img"                                      
                            image={dummy}
                            style={{height: "220px"}}
                        />    
                    <CardContent>                                 
                        <p className='text-sm pb-2 md:pt-4'><b><u>Note:</u></b> The above placeholder image is used for info cards where <b><i>Official Image</i></b> is not avialable.</p>
                        <p className='text-sm text-red-700 italic md:pt-2'>Please do not confuse them with other cards which have official images from their websites.</p>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 380, maxHeight: 400}} className="p-2 m-2 w-[75%] h-[75%] md:w-[100%] md:h-[100%]">
                    <CardContent>
                        <Typography color="text.primary" fontFamily="revert" fontSize="75px" align="center" className="italic text-7xl">
                            Quicky
                        </Typography>                       
                        <Typography color="text.secondary" fontFamily="revert" className="pb-2 animate-pulse text-center">
                            Quick info at your fingertips.
                        </Typography>
                    </CardContent>
                    <Search />
                </Card>
                </ Grid>
            </div>
            <div>
                <center><p className="text-white text-xs md:text-sm pb-4">© Aberton Studio 2022, Quicky powered by Google API</p></center>
            </div>
        </div>
    )
}

export default Home