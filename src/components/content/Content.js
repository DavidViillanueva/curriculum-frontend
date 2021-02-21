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

<<<<<<< HEAD
import useFetch from '../../hooks/useFetch';
import Loader from '../common/Loader';
=======
import './Content.css';
>>>>>>> 51625ea226cb6a56de760e5a98288896fee4c759

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
		<div className="content__main-block">
			<Tabs
				value={value}
				onChange={handleChange}
				variant="fullWidth"
				indicatorColor="primary"
				textColor="primary"
				aria-label="icon tabs example"
			>
<<<<<<< HEAD
				<Tab label="Personal" icon={<AccountCircleOutlinedIcon />} aria-label="Personal Data"></Tab>
				<Tab label="Estudios" icon={<LibraryBooksOutlinedIcon />} aria-label="Academic" />
				<Tab label="Contacto" icon={<EmailOutlinedIcon />} aria-label="Contact Data" />
			</Tabs>

			{(loadingPersonal && loadingContact && loadingAcademic) 
				?
					<Loader active={ true } />
				:<>
					<TabPanel value={value} index={0} align="left" className="content__tab-panel">
						<PersonalData data={personalData} />
					</TabPanel>

					<TabPanel value={value} index={1} align="center" className="content__tab-panel">
						<AcademicData data={academicData} />
					</TabPanel>

					<TabPanel value={value} index={2} align="right" className="content__tab-panel">
						<ContactData data={contactData} />
					</TabPanel>
				</>
			}
=======
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

>>>>>>> 51625ea226cb6a56de760e5a98288896fee4c759
		</div>
	);
};

export default Content;
