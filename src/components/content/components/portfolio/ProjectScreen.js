import React from 'react'

import Close from '@material-ui/icons/Close';

const ProjectScreen = ({
    value,
    index,
    project,
    onClose
}) => {
    return (
        <div    
            className={( value === index)?'project show animate__animated animate__fadeIn':'project '}
            hidden={ value!== index }
            index = { index }
        >
            <div className="proyect-block">
                <div className="close-block">
                    <p
                        onClick={ () => onClose() }
                        style={{
                            cursor: 'pointer'
                        }}
                    >
                        <Close 
                            fontSize="large"
                        />
                    </p>
                </div>
                
                <h1>{ project.title }</h1>
                
                <img
                    src="https://pbs.twimg.com/profile_banners/2768311879/1508533275/1500x500"
                    alt="project"
                />

                <p>{ project.description }</p>
                
                <div className="links-block">
                    <a 
                        className="button"
                        href="#"
                    >
                        repo
                    </a>

                    <a
                        className="button"
                        href="#"
                    >
                        deploid
                    </a>
                </div>
            
            </div>
        </div>
    )
}

export default ProjectScreen
