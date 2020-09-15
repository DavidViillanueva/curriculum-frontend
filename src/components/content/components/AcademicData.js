import React from 'react';

import Studie from './academic/Studie';

import useFetch from '../../../hooks/useFetch';

const AcademicData = () => {

    const {data:studies, loading=true} = useFetch('https://backend-curriculum-ronco.herokuapp.com/academic');


    return (
        <>
                {loading &&
                    <div>
                        <p>Loading...</p>
                    </div>
                }
                {!loading &&
                    studies.map( (studie) => 
                        <Studie studie={ studie } key={ studie.title } />
                    )
                }
        </>
    )
}

export default AcademicData;
