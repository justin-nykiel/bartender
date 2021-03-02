import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Selectors = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Liquor</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Vodka</MenuItem>
                    <MenuItem value={20}>Gin</MenuItem>
                    <MenuItem value={30}>Rum</MenuItem>
                    <MenuItem value={30}>Whiskey</MenuItem>
                    <MenuItem value={30}>Rum</MenuItem>
                    <MenuItem value={30}>Rum</MenuItem>
                    <MenuItem value={30}>Rum</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Liqueur</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Amaretto</MenuItem>
                    <MenuItem value={20}>Triple Sec</MenuItem>
                    <MenuItem value={30}>Kahlua</MenuItem>
                    <MenuItem value={30}>Coconut Liqueur</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Mixers</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Apple Juice</MenuItem>
                    <MenuItem value={20}>Lemon Juice</MenuItem>
                    <MenuItem value={30}>Coca Cola</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
        </div>
    )
}

export default Selectors
