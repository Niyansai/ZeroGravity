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
import { useHistory } from 'react-router';
import "./styles.css";

import API from '../../../../Utils/Utils';

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

export default function SmallCard({ id, name, img }) {
  
  const classes = useStyles();
  const theme = useTheme();

  const history = useHistory();

  const moveToPackageDetails = () => {
    history.push(`/packagedetails/${id}`);
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={API.GET_IMAGE + "?image=" + img[0]}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {IDBCursor}
          <Typography className="text-bottom-slidecard">
            {name && name.toString()}
          </Typography>

        </CardContent>
        <div className={classes.controls}>
          <button className="slider-card-btn" onClick={(e) => { moveToPackageDetails() }}>More</button>
        </div>
      </div>

    </Card>
  );
}
