import React, { useState } from 'react';

import useFetch from '../../hooks/useFetch';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './components/TabPanel';
import PersonalData from './components/personal/PersonalData';
import AcademicData from './components/academic/AcademicData';
import Portfolio from './components/portfolio/Portfolio';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import BusinessCenter from '@material-ui/icons/BusinessCenter';

import './Content.css';

const Content = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const { data: personalData, loading: loadingPersonal } = useFetch(
		'https://backend-curriculum-ronco.herokuapp.com/personal_data'
	);

	const { data: contactData } = useFetch(
		'https://backend-curriculum-ronco.herokuapp.com/contact'
	);

	const { data: academicData, loading: loadingAcademic } = useFetch(
		'https://backend-curriculum-ronco.herokuapp.com/academic'
	);

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
				<Tab icon={<AccountCircleOutlinedIcon />} aria-label="Personal Data"></Tab>

				<Tab icon={<LibraryBooksOutlinedIcon />} aria-label="Academic" />

				<Tab icon={<BusinessCenter />} aria-label="Portfolio" />

			</Tabs>

			<TabPanel value={value} index={0} align="left" className="tab-panel">
				{loadingPersonal ? <p>loading</p> : <PersonalData data={personalData} contactData={contactData} />}
			</TabPanel>

			<TabPanel value={value} index={1} align="center" className="tab-panel">
				{loadingAcademic ? <p>loading</p> : <AcademicData data={academicData} />}
			</TabPanel>

			<TabPanel value={value} index={2} align="center" className="tab-panel">
				{loadingAcademic ? <p>loading</p> : <Portfolio /> }
			</TabPanel>

		</div>
	);
};

export default Content;
