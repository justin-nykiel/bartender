import {React, useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Header from './Header'
import Search from './Search'
import Moviecards from './Drinkcards'
import axios from 'axios'
import Selectors from './Selectors'
import Drinkcards from './Drinkcards'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Layout = () => {
    const classes = useStyles();
    const [drinks, setDrinks] = useState([])
    const [searchTerm, setSearchTerm] = useState("")


    const onChangeSearchTerm = (e) => {
      const search = e.target.value;
      setSearchTerm(search);
    };
    const searchForDrink = (e) => {
      e.preventDefault()
      axios.get("http://localhost:8080/drink/"+searchTerm)
      .then((response)=>{
            console.log(response)
            setDrinks(response.data.drinks)
      })
    };
    
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Bartender
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={12}>
            <Search  searchTerm={searchTerm} onChangeSearchTerm={onChangeSearchTerm} searchForDrink={searchForDrink}></Search>
        </Grid>
        <Grid item xs={12}>
            <Selectors></Selectors>
        </Grid>
        <Grid item xs={12}>
          {drinks.map(each => {
            return <Drinkcards img={each.strDrinkThumb} instruction={each.strInstructions} name={each.strDrink} glass={each.strGlass} ingredient={[[each.strIngredient1, each.strMeasure1], [each.strIngredient2, each.strMeasure2], [each.strIngredient3, each.strMeasure3], [each.strIngredient4,each.strMeasure4], [each.strIngredient5, each.strMeasure5], [each.strIngredient6, each.strMeasure6], [each.strIngredient7, each.strMeasure7], [each.strIngredient8, each.strMeasure8], [each.strIngredient9, each.strMeasure9], [each.strIngredient10, each.strMeasure10], [each.strIngredient11, each.strMeasure11], [each.strIngredient12, each.strMeasure12], [each.strIngredient13, each.strMeasure13], [each.strIngredient14, each.strMeasure14], [each.strIngredient15, each.strMeasure15]]} />
          })} 
        </Grid>
        <Grid item xs={12}>
          display selected drink
        </Grid>
      </Grid>
      
      </>
    )
}

export default Layout
