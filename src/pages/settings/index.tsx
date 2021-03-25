import React from 'react';
import type { FC } from 'react';
import {
  makeStyles,
  Typography
} from '@material-ui/core';
import type { Theme } from 'src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    marginRight: theme.spacing(3)
  }
}));


const Settings: FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.label}>
      Settings
    </Typography>
  );
};

export default Settings;
