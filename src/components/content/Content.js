import React, { useState } from 'react';

import useFetch from '../../hooks/useFetch';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './components/TabPanel';
import PersonalData from './components/personal/PersonalData';
import AcademicData from './components/academic/AcademicData';
import ContactData from './components/contact/ContactData';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Loader from '../common/Loader';

const Content = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const { data: personalData, loading: loadingPersonal } = useFetch(`${process.env.REACT_APP_BACK}/personal_data`);
	// const { data: personalData, loading: loadingPersonal } = useFetch(`${window.REACT_APP_BACK}/personal_data`);

	const { data: academicData, loading: loadingAcademic } = useFetch(`${process.env.REACT_APP_BACK}/academic`);
	const { data: jobsData } = useFetch(`${process.env.REACT_APP_BACK}/jobs`);
	// const { data: academicData, loading: loadingAcademic } = useFetch(`${window.REACT_APP_BACK}/academic`);

	return (
		<div className="content__main-block">
			<Tabs
				value={value}
				onChange={handleChange}
				variant="fullWidth"
				indicatorColor="primary"
				textColor="primary"
				aria-label="icon tabs example"
			>
				<Tab label="Personal" icon={<AccountCircleOutlinedIcon />} aria-label="Personal Data"></Tab>
				<Tab label="Estudios / Laboral" icon={<LibraryBooksOutlinedIcon />} aria-label="Academic" />
				<Tab label="Contacto" icon={<MailOutlineIcon />} aria-label="Contact Data" />
			</Tabs>

			{loadingPersonal && loadingAcademic ? (
				<Loader active={true} />
			) : (
				<>
					<TabPanel value={value} index={0} align="left" className="content__tab-panel">
						{loadingPersonal ? <p>Loading</p> : <PersonalData data={personalData} />}
					</TabPanel>

					<TabPanel value={value} index={1} align="center" className="content__tab-panel">
						<AcademicData data={academicData} jobData={jobsData} />
					</TabPanel>

					<TabPanel value={value} index={2} align="right" className="content__tab-panel">
						<ContactData />
					</TabPanel>
				</>
			)}
		</div>
	);
};

export default Content;
