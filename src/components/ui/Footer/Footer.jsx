import { Stack, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;BetFlix&raquo; 18+
        <br />
        Данный сайт создан исключительно в обучающих целях.
        <br />
        Все права принадлежат правообладателям.
      </Typography>
      <Typography variant="h4" color="primary.main">
        BetFlix
      </Typography>
    </Stack>
  );
};
