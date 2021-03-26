import React, {
  useEffect, useState
} from 'react';
import type { FC } from 'react';
import {
  Box,
  Container,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import { useDispatch, useSelector } from 'src/store';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100% - 8vh)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  label: {
    marginRight: theme.spacing(3)
  }
}));


const Convert: FC = () => {
  const classes = useStyles();
  const { setting } = useSelector((state) => state.settings) 
  const [input, setInput] = useState<number>(0);
  const [output, setOutput] = useState<number>(0);

  useEffect(() => {
    setOutput(input / setting.rate);
  }, [input])

  return (
    <Page
      className={classes.root}
      title="Convert"
    >
      <Container maxWidth={false}>
        <Header />
        <Box mt={3} display="flex" alignItems="center">
          <Typography
            color="primary"
            className={classes.label}
          >
            From :
          </Typography>
          <TextField 
            value={input}
            label="UAH"
            onChange={(e: any) => setInput(e.target.value)}
          />
          <Typography
            color="primary"
            className={classes.label}
          >
            {` =====>`}
          </Typography>
          <Typography
            color="primary"
            className={classes.label}
          >
            To :
          </Typography>
          <TextField 
            value={output.toPrecision(4)}
            label="USD"
            disabled
          />
        </Box>
      </Container>
    </Page>
  );
};

export default Convert;
