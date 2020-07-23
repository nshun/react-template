import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing() * 5,
  },
  message: {
    textAlign: 'right',
    marginLeft: theme.spacing() * 2,
  },
}));

const NotFound: React.FC = () => {
  const classes = useStyle();

  document.title = 'ページが見つかりません';

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography variant="h4">404</Typography>
        <Typography variant="subtitle1" className={classes.message}>
          ページが見つかりません
        </Typography>
      </Box>
      <Box>
        <Button component={Link} to="/" variant="contained" color="primary">
          TOP
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
