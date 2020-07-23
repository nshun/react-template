import * as React from 'react';
import { Link } from 'react-router-dom';

import { Fab, Typography, makeStyles } from '@material-ui/core';

import GithubButton from '../components/GithubButton';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  nav: {
    overflow: 'hidden',
    position: 'fixed',
    display: 'flex',
    top: '0',
    right: '0',
    padding: theme.spacing() * 2,
  },
  wrapper: {
    margin: theme.spacing() * 2,
  },
  content: {
    textAlign: 'center',
  },
}));

const Top: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <GithubButton />
      </div>
      <div className={classes.content}>
        <Typography variant="h1">React App</Typography>
        <Typography variant="subtitle1" className={classes.wrapper}>
          This is template
        </Typography>
        <Fab
          component={Link}
          to="/404"
          variant="extended"
          color="primary"
          size="large"
          className={classes.wrapper}
        >
          START
        </Fab>
      </div>
    </div>
  );
};

export default Top;
