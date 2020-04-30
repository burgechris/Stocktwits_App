import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function TweetItem(props) {
  const classes = useStyles();
  const { name, avatar, tweet, symbol, timestamp } = props;

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.inline}
                color="textPrimary"
              >
                <b>{name}</b>
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <b>{tweet}</b>
              </Typography>
            </React.Fragment>
          }
        />
        <Typography variant="body2" >
          {symbol}
        </Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}