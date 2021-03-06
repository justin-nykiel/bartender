import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import '../css/Selectors.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Selectors = ({searchDrinkByIngredients}) => {
    const classes = useStyles();
    const [liquor, setLiquor] = useState("")
    const [liqueur, setLiqueur] = useState("")
    const [mixer, setMixer] = useState("")

    
    const handleLiquorChange = (e) => {
        setLiquor(e.target.value)
    }
    const handleLiqueurChange = (e) => {
        setLiqueur(e.target.value)
    }
    const handleMixerChange = (e) => {
        setMixer(e.target.value)
    }
    
    return (
        <div id="selectorBox">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Liquor</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={liquor}
                    onChange={handleLiquorChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Vodka"}>Vodka</MenuItem>
                    <MenuItem value={"Gin"}>Gin</MenuItem>
                    <MenuItem value={"Rum"}>Rum</MenuItem>
                    <MenuItem value={"Whiskey"}>Whiskey</MenuItem>
                </Select>
                <FormHelperText>pick your liquor</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Liqueur</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={liqueur}
                    onChange={handleLiqueurChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Amaretto"}>Amaretto</MenuItem>
                    <MenuItem value={"Triple Sec"}>Triple Sec</MenuItem>
                    <MenuItem value={"Kahlua"}>Kahlua</MenuItem>
                    <MenuItem value={"Coconut Liqueur"}>Coconut Liqueur</MenuItem>
                    <MenuItem value={"Bitters"}>Bitters</MenuItem>
                    <MenuItem value={"Blue Curacao"}>Blue Curacao</MenuItem>
                </Select>
                <FormHelperText>pick your liqueur</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Mixers</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={mixer}
                    onChange={handleMixerChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Apple Juice"}>Apple Juice</MenuItem>
                    <MenuItem value={"Lemon Juice"}>Lemon Juice</MenuItem>
                    <MenuItem value={"Coca-Cola"}>Coca-Cola</MenuItem>
                    <MenuItem value={"Lemon"}>Lemon</MenuItem>
                    <MenuItem value={"7-Up"}>7-Up</MenuItem>
                    <MenuItem value={"Cranberry Juice"}>Cranberry Juice</MenuItem>
                    <MenuItem value={"Sprite"}>Sprite</MenuItem>
                    <MenuItem value={"Grenadine"}>Grenadine</MenuItem>
                </Select>
                <FormHelperText>pick your mix-ins</FormHelperText>
            </FormControl>
            <Button id="selectorButton" variant="contained" color="primary" onClick={()=>{searchDrinkByIngredients(liquor, liqueur, mixer)}}>
                Search By Ingredients
            </Button>
        </div>
    )
}

export default Selectors
