import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const FallbackUI = () => (
  <div
    style={{
      display: 'flex',
      position: 'absolute',
      width: '100vw',
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress />
  </div>
);

export default FallbackUI;
