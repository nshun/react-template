import * as React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  createStyles,
  Fab,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";

import { grey } from "@material-ui/core/colors";

import ClearCacheButton from "../components/ClearCacheButton";
import withRoot from "../withRoot";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
    },
    nav: {
      textAlign: "center",
      position: "absolute",
      top: "0%",
      left: "100%",
      transform: "translateY(0%) translateX(-100%)",
      padding: theme.spacing.unit * 2,
    },
    buttons: {
      display: "flex",
    },
    button: {
      textTransform: "none",
      margin: theme.spacing.unit,
    },
    githubButton: {
      textTransform: "none",
      color: theme.palette.getContrastText(grey[900]),
      backgroundColor: grey[900],
      "&:hover": {
        color: theme.palette.getContrastText(grey[100]),
        backgroundColor: grey[100],
      },
      margin: theme.spacing.unit,
    },
    wrapper: {
      margin: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 150,
    },
  });

class Top extends React.Component<WithStyles<typeof styles>, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.nav}>
          <div className={classes.buttons}>
            <Button
              target="_blank"
              href="https://github.com/nshun/react-template"
              size="small"
              variant="outlined"
              className={classes.githubButton}
            >
              Github
            </Button>
            <ClearCacheButton />
          </div>
        </div>
        <div className={classes.root}>
          <Typography variant="h1" gutterBottom={true}>
            React App
          </Typography>
          <Typography variant="body1" gutterBottom={true}>
            template
          </Typography>
          <div className={classes.wrapper}>
            <Fab
              component={Link}
              {...{ to: "/404" } as any}
              variant="extended"
              color="primary"
              size="large"
            >
              START
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Top));
