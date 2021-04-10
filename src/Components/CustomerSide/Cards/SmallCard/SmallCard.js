import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ProfileReal from '../../../../Assets/ProfileReal.jpeg';
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: "2rem",
    borderBottom: '1px solid lightgray',
    width: "350px", 
    borderRadius: 0,
    boxShadow: '0px 2px 2px 6px, rgba(0, 0, 0, 0.4)'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
 
}));

export default function SmallCard( {img} ) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className="text-top-slidecard">
            Start Date-End Date
          </Typography>
          <Typography className="text-bottom-slidecard">
           Trip to the Himalayas
          </Typography>

        </CardContent>
        <div className={classes.controls}>
          <button className="slider-card-btn">More</button>
        </div>
      </div>
      
    </Card>
  );
}
