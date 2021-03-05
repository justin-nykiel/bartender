import {React, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../css/Search.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const Search = ({searchTerm, searchForDrink, onChangeSearchTerm}) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={searchForDrink} id="container">
             <TextField id="outlined-search" label="Search field" type="search" variant="outlined" value={searchTerm} onChange={onChangeSearchTerm}/>
             <Button id="searchButton" type="submit" variant="contained" color="primary" disableElevation>Search a Cocktail</Button>
        </form>
    
    )
}

export default Search
