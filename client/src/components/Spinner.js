import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../css/Spinner.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const Spinner = () => {
    const classes = useStyles();
    return (
        <div id="spinnerBox">
            <CircularProgress />   
        </div>
    )
}

export default Spinner
