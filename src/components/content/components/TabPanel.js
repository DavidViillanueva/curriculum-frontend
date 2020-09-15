import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabPanel = ({ children, value, index, align, ...other}) => {
    return (
        <>
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
            className="animate__animated animate__fadeInDown animate__fast"
          >
            {value === index && (
              <Box >
                <Typography variant="inherit" align={ align }>{children}</Typography>
              </Box>
            )}
          </div>
        </>
    )
};

export default TabPanel;
