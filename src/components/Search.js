import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import '../index.css'
import { useState } from "react";

const Search = () => {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [source, setSource] = useState('');
    const [type, setType] = useState(false);

    const navigate = useNavigate();
    const search = e => {
        if (input !== '') {

            e.preventDefault()

            dispatch({
                type: actionTypes.UpdateFetchedData,
                term: input
            })

            navigate('/search')
        }
        else {
            setType(true)
            alert("Sorry, Please enter what I need to search for")
            console.log("No Search Term Found")
        }
    }
    
    return (
        <div className="bg-white rounded-sm">
            <div className="p-2">
                <FormControl fullWidth>
                    <InputLabel>Select Source: <b className="text-sm italic">Default(Google API)</b></InputLabel>
                    <Select
                        value={source}
                        onChange={(event) => { setSource(event.target.value) }}
                        label="Select Source: Default(Google API)"
                    >
                        <MenuItem value={1}>Google API</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="p-2">
                <TextField error={type}
                    id="filled-basic" label="I want to search for"
                    variant="outlined" className="rounded-sm text-xs w-[100%]"
                    onClick={() => setType(false)}
                    onChange={e => setInput(e.target.value)}
                >
                    Input
                </TextField>
            </div>
            <div className="buttonBox flex flex-row justify-center">
                <Button variant="contained" onClick={search}><p className="text-xs md:text-base">Quick Search</p></Button>
                <Button variant="outlined" ><p className="text-xs md:text-base">About Developer</p></Button>
            </div>
        </div>
    )
}

export default Search