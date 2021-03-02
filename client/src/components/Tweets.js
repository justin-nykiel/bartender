import React from 'react'
import Typography from '@material-ui/core/Typography';

const Tweets = ({tweets}) => {
    if(tweets.length>0){
        return (
            <>
            {tweets.map(each => {
                return <div><Typography paragraph>Method:</Typography>
                <Typography paragraph>{each.text}
                </Typography></div>
            })}
            
            </>
        )
    } else {
        return <Typography paragraph>No Tweets Regarding this Film</Typography>
    }
}

export default Tweets
