import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import CardActionArea from '@material-ui/core/CardActionArea';
import "../css/Drinkcards.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    height: '100%'
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  content: {
    height: "100%"
  }
}));

export default function RecipeReviewCard({img, name, ingredient, glass, measure, instruction}) {
  const classes = useStyles();


  return (
    <div id="drink">
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={img}
            title={name}
          />
          <CardContent
            className={classes.content}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span className="ingredients">Ingredients:</span>
              {ingredient.map((each, index)=>{
                if(each[0] !== null){
                  if(each[1]== null) each[1] = "as needed"
                  return <li>{each[0]} : {each[1]}</li>
                }
              })}
              <br></br>
              {instruction}
            </Typography>
          </CardContent>
      </Card>
    </div>
  );
}