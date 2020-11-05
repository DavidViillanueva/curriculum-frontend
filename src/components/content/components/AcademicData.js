import React from 'react';

import Studie from './academic/Studie';

import useFetch from '../../../hooks/useFetch';

const AcademicData = React.memo(({ data:studies }) => {


    let loading = true;

    if( studies ) {
        loading = false;
    }


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
})

export default AcademicData;
