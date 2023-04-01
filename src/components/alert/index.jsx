import { memo } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BasicAlert = ({ severity, message }) => {
  return (
    <Stack sx={{ width: '20%', position: 'absolute', bottom: '2%', left: '4%' }} spacing={2}>
      <Alert variant="filled" severity={severity}>
        {message}
      </Alert>
    </Stack>
  );
};

export default memo(BasicAlert);
