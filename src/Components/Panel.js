import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const StatisticsPanel = () => {
  const containerStyle = {
    backgroundColor: '#6c5fd4',
    padding: '25px 37px',
  };

  const dividerStyle = {
    width: '2px',
    height: '153.52px',
  };

  const numberStyle = {
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '46.54px',
    letterSpacing: '0.23px',
    lineHeight: '56.89px',
  };

  const textStyle = {
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '24.13px',
    letterSpacing: '0.12px',
    lineHeight: '31.03px',
    maxWidth: '288px',
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <Typography style={numberStyle}>3x</Typography>
          <Typography style={textStyle}>Faster Release cycle</Typography>
        </Grid>

        <Grid item>
          <img src="https://dashboard.codeparrot.ai/api/image/Z884vGI2-LlqmTRY/frame-16.png" style={dividerStyle} alt="divider" />
        </Grid>

        <Grid item>
          <Typography style={numberStyle}>40%</Typography>
          <Typography style={textStyle}>Reduction in manual administration time</Typography>
        </Grid>

        <Grid item>
          <img src="https://dashboard.codeparrot.ai/api/image/Z884vGI2-LlqmTRY/frame-16-2.png" style={dividerStyle} alt="divider" />
        </Grid>

        <Grid item>
          <Typography style={numberStyle}>60%</Typography>
          <Typography style={textStyle}>Software Development Reusability</Typography>
        </Grid>

        <Grid item>
          <img src="https://dashboard.codeparrot.ai/api/image/Z884vGI2-LlqmTRY/frame-16-3.png" style={dividerStyle} alt="divider" />
        </Grid>

        <Grid item>
          <Typography style={numberStyle}>40%</Typography>
          <Typography style={textStyle}>Cost Optimization</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default StatisticsPanel;

