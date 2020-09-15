import React from 'react';

import useFetch from '../../../hooks/useFetch';

import './PersonalData.css';

const PersonalData = () => {

    const {data, loading=true} = useFetch('https://backend-curriculum-ronco.herokuapp.com/personal_data');

    let personalData = {}
    if(data){
         personalData = data[0];
    }

    return (
        <>
                {loading &&
                    <div>
                        <p>Loading...</p>
                    </div>
                }
                {!loading &&
                    <div className="data-card">
                        <div className="personalData-row">
                            <h3>Nombre:</h3>   
                            <p>{ personalData.name }</p>
                        </div>
                        <div className="personalData-row">
                            <h3>Edad:</h3>   
                            <p>{ personalData.age }</p>
                        </div>
                        <div className="personalData-row"> 
                            <p>{ personalData.about }</p>
                        </div>
                        <div className="personalData-block">
                            <h3>Competencias:</h3>
                            <ul className="list" >
                            {
                                personalData.skills.map( (skill) =>
                                    
                                        <li key={skill}>{skill}</li>
                                    
                                )
                            }
                            </ul>
                        </div>
                        <div className="personalData-block">
                            
                            <h3>Idiomas:</h3>
                            <ul className="list">
                            {
                                personalData.languages.map( (language) =>
                                        <li key={language}>{language}</li>
                                )
                            }
                            </ul>
                        </div>
                        <div className="personalData-block">
                            <h3>Herramientas:</h3>
                            <ul className="list">
                            {
                                personalData.tools.map( (tool) =>      
                                        <li key={tool}>{tool}</li>
                                )
                            }
                            </ul>
                        </div>
                    </div> 
                }
        </>
    )
}

export default PersonalData;
