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

                <p>{ project.description }</p>

            
            </div>
        </div>
    )
}

export default ProjectScreen
