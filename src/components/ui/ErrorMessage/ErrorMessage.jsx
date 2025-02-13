import { Box, Typography } from '@mui/material';
import React from 'react';

export const ErrorMessage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="auto"
    >
      <Typography variant="h6">
        Произошла ошибка. Попробуйте обновить страницу
      </Typography>
    </Box>
  );
};
