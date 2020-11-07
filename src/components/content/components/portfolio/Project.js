import React, { useState } from 'react';

import './Project.css';
import ProjectScreen from './ProjectScreen';

const Project = () => {

    const [value, setValue] = useState(0)
    
    const handleClick = (index) => {
        setValue(index)
    }

    const onClose = () => {
        setValue( 0 ) 
    }

    const projects = [
        {
            title: 'projectTitle 1',
            description: 'Project description 1',
            img: 'img url',
            repositorie: 'link to github',
            link: 'link to production',
            id: 1
        },{
            title: 'projectTitle 2',
            description: 'Project description 2',
            img: 'img url',
            repositorie: 'link to github',
            link: 'link to production',
            id: 2
        },{
            title: 'projectTitle 3',
            description: 'Project description 3',
            img: 'img url',
            repositorie: 'link to github',
            link: 'link to production',
            id: 3
        }
    ]

    //project estructure
    // {
    //     title: 'projectTitle',
    //     description: 'Project description',
    //     img: 'img url',
    //     repositorie: 'link to github',
    //     link: 'link to production'
    // }

    return (
        <>

        {
            projects.map( project => {
                return (
                    <div
                        key={ project.id }
                    >
                        <div 
                            className="project-balloon"
                            onClick={ () => handleClick(project.id) }

                            key={ project.id }
                            index = { project.id }
                        >
                            <img 
                                src="https://pbs.twimg.com/profile_banners/2768311879/1508533275/1500x500"
                                alt="project"
                            />
                            <p>
                                {`Proyecto ${project.title}`}
                            </p>
                        </div>

                        <ProjectScreen
                            index={ project.id }
                            key={ `screen ${project.id }`}
                            onClose = { onClose } 
                            value={ value }
                            project = { project }
                        />
                    </div>
                )
            })
        }

        </>
    )
}

export default Project;
