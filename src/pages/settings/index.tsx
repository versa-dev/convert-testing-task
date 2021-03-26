import React, { useState } from 'react';
import type { FC } from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import type { Setting } from 'src/types/settings';
import { useDispatch, useSelector } from 'src/store';
import { setSettings } from 'src/slices/settings';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100% - 64px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  rate: {
    marginRight: '5px'
  }
}));


const Settings: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state.settings);
  const [currentSetting, setCurrentSetting] = useState<Setting>(setting)

  const handleSetting = (name: string, e: React.FormEvent<any>) => {
    if (name === 'isAuto') {
      setCurrentSetting({
        ...currentSetting,
        isAuto: !currentSetting.isAuto
      })
    } else {
      setCurrentSetting({
        ...currentSetting,
        rate: Number(e.currentTarget.value)
      })
    }
  }

  const submitSetting = () => {
    dispatch(setSettings(currentSetting));
  }

  return (
    <Page
      className={classes.root}
      title="Settings"
    >
      <Container maxWidth={false}>
        <Header />
        <Box
          mt={3}
          display="flex"
          alignItems="center"
        >
          <Typography
            color="primary"
          >
            Customize
          </Typography>
          <Switch 
            value={setting.isAuto}
            onChange={(e) => handleSetting('isAuto', e)}
          />
          <Typography
            color="primary"
          >
            Auto
          </Typography>
        </Box>
        {/* {!currentSetting.isAuto &&  */}
          <Box
            mt={3}
            display="flex"
            alignItems="center"
          >
            <Typography
              color="primary"
              className={classes.rate}
            >
              Convert Rate :
            </Typography>
            <TextField
              variant="outlined"
              label="Rate"
              value={currentSetting.rate}
              type="number"
              disabled={currentSetting.isAuto}
              onChange={e => handleSetting('rate', e)}
            />
          </Box>
        {/* } */}
        <Box
          mt={2}
        >
          <Button 
            variant="contained"
            color="primary"
            onClick={submitSetting}
          >
            Save Settings
          </Button>
        </Box>
      </Container>
    </Page>
  );
};

export default Settings;
