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
import Drinkscontainer from './Drinkscontainer'
import Spinner from './Spinner'
import '../css/Layout.css'

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
    const [loading, setLoading] = useState(false)
    
    const onChangeSearchTerm = (e) => {
      const search = e.target.value;
      setSearchTerm(search);
    };
    
    const searchForDrink = (e) => {
      e.preventDefault()
      axios.get("http://localhost:8080/drink/"+searchTerm)
      .then((response)=>{
          console.log(response.data)
          setDrinks(response.data.drinks)
      })
    };

    const searchDrinkByIngredients = (liquor, liqueur, mixer) => {
      let ingredients = ""
      if(liquor){
        ingredients += liquor
      }
      if(liqueur && liquor){
        ingredients += "," + liqueur
      } else if(liqueur){
        ingredients += liqueur
      }
      if(mixer && (liquor || liqueur)){
        ingredients += "," + mixer
      } else if(mixer){
        ingredients += mixer
      }
      async function getDrinks(){
        setLoading(true)
        let values = await axios.get("http://localhost:8080/drink/ingredients/"+ingredients)
        let dranks = false
        if(values.data.drinks !== "None Found"){
          dranks = await Promise.all(values.data.drinks.map((element)=>{
              return axios.get("http://localhost:8080/drinkid/"+element.idDrink)
          }))
        } 
        return dranks
      }
      getDrinks().then((response)=>{
        let drinkArray = false
        if(response){
          drinkArray = response.map((element)=>{
            return element.data.drinks[0]
          })
        }
        setDrinks(drinkArray)
        setLoading(false)
      })
    }
    
    const seeState = () => {
      console.log(drinks)
    }
    
    return (
        <>
        <div id="headerBlock">
          <Header></Header>
        </div>
        <div id="searchBlock">
            <Search  searchTerm={searchTerm} onChangeSearchTerm={onChangeSearchTerm} searchForDrink={searchForDrink}></Search>
            <Selectors searchDrinkByIngredients={searchDrinkByIngredients}></Selectors>
        </div>
        <div id="drinkBlock">
            {loading ? <Spinner></Spinner> :<Drinkscontainer drinks={drinks}></Drinkscontainer>}
        </div>
      </>
    )
}

export default Layout
