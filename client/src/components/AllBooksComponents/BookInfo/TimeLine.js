
import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import useStyles from "./styles.js";
import Typography from '@mui/material/Typography';
  

const TimeLine = () => {
    const classes = useStyles();

  
  return (
    <Timeline >
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success" variant="outlined">
        </TimelineDot >
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '5px', px: 2 }}>
        <Typography variant="h6" component="span" className={classes.timeline}>
          Images
        </Typography>
        <Typography >Uploaded the Images</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '40px', px: 2 }}>
        <Typography variant="h6" component="span" className={classes.timeline}>
          Details
        </Typography>
        <Typography >Verifing Contents</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="success" variant="outlined">
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '10px', px: 2 }}>
        <Typography variant="h6" component="span" className={classes.timeline}>
          Price
        </Typography>
        <Typography>Calculating Price</Typography>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector  />
        <TimelineDot color="success" variant="outlined">
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent sx={{ py: '10px', px: 2 }}>
        <Typography variant="h6" component="span" className={classes.timeline}>
          Result
        </Typography>
        <Typography >Results Displayed</Typography>
      </TimelineContent>
    </TimelineItem>
  </Timeline>

   /* <Timeline >
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success"/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.timeline}>Uploaded the Images</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.timeline}>Verified the Contents</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success"/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={classes.timeline}>Calculating Price</TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success"/>
      </TimelineSeparator>
      <TimelineContent className={classes.timeline}>Results Displayed</TimelineContent>
    </TimelineItem>
  </Timeline>
*/
  );
};

export default TimeLine;



