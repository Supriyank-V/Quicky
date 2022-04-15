import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useStateValue } from "../StateProvider"
import { Typography, Button, CircularProgress } from "@mui/material"
import Search from './Search'
import InfoCards from './InfoCards'
import FetchData from '../GetSearchData'
import Helmet from "react-helmet"
//import response from "../response"

const SearchPage = () => {

    const [{ term }, dispatch] = useStateValue()
    const [visible, setvisible] = useState(false)

    const visibility = () => {
        setvisible(!visible)
    }
    //LIVE API CALL
    const {data} = FetchData(term)

    //Coded Response for Testing without Triggering Google API {term}='Tesla'
    //const data = response;

    useEffect(() => {
        setvisible(false)
    }, [data])

    return (
        <div className="flex flex-col justify-between h-[100%] bg-gray-800">
            <Helmet>
                <title>{term} - Quicky Info Cards</title>
            </Helmet>
            <div className="p-4 flex flex-row justify-between">
                <div>
                    <Link to='/' className="text-white">
                        <Typography component={'span'} color="white" fontFamily="revert" fontSize="30px" className="italic">
                            Quicky
                        </Typography>
                        <Typography component={''} color="white" fontFamily="revert" fontSize="12px" className="pb-2 animate-pulse">
                            Quick info at your fingertips.
                        </Typography>
                    </Link>
                </div>
                <div>
                    <Button variant="contained" onClick={visibility}>ReSearch</Button>
                    {visible ? <Search /> : <p></p>}
                </div>
            </div>

            {visible ?
                <p className="text-white text-2xl italic flex flex-row justify-center">Waiting for Research</p>
                : <p className="text-white text-2xl italic flex flex-row justify-center">Showing Info Cards for :<b className="pl-2">{term}</b></p>}

            <div className="p-6 flex flex-row justify-center">
                {data ? <InfoCards data={data} /> : <div className="p-8"><CircularProgress /></div>}
            </div>

            <div >
                <center><p className="text-white text-sm pb-4">© Aberton Studio 2022, Quicky powered by Google API</p></center>
            </div>
        </div>
    )
}

export default SearchPage