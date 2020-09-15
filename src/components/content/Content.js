import React, { useState } from 'react';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './components/TabPanel';
import PersonalData from './components/PersonalData';
import AcademicData from './components/AcademicData';
import ContactData from './components/ContactData';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';


import './Content.css';



const Content = () => {

    const [value, setValue] = useState(0);


    const handleChange = ( event, newValue ) => {
        setValue( newValue );
    }
    
    return (
        <div className="main-block">
             <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs example"
            >
                <Tab icon={<AccountCircleOutlinedIcon />} aria-label="Personal Data">
                    
                </Tab>

                <Tab icon={<LibraryBooksOutlinedIcon />} aria-label="Academic" />
                <Tab icon={<EmailOutlinedIcon />} aria-label="Contact Data" />
            </Tabs>

            <TabPanel value={value} index={0} align="left" className="tab-panel">
                <PersonalData />
            </TabPanel>

            <TabPanel value={value} index={1} align="center" className="tab-panel">
                <AcademicData />
            </TabPanel>

            <TabPanel value={value} index={2} align="right" className="tab-panel">
                <ContactData />
            </TabPanel>

        </div>
    )
}

export default Content;
