import React from 'react';

import { Button, makeStyles } from '@material-ui/core';

import { grey } from '@material-ui/core/colors';

const useStyle = makeStyles((theme) => ({
  githubButton: {
    textTransform: 'none',
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      color: theme.palette.getContrastText(grey[100]),
      backgroundColor: grey[100],
    },
    margin: theme.spacing(),
  },
}));

const GithubButton = () => {
  const classes = useStyle();

  return (
    <Button
      target="_blank"
      href="https://github.com/nshun/react-template"
      rel="noopener"
      size="small"
      variant="outlined"
      className={classes.githubButton}
    >
      Github
    </Button>
  );
};

export default GithubButton;
