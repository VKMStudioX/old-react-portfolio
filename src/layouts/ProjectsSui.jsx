import React, { useContext } from 'react';
import { StoreContext } from '../Store/StoreProvider';
import SingleProjectSui from './SingleProjectSui';

const ProjectsSui = () => {

    const  { pCOWebProjects, pCOWebImages, hmiProjects, hmiImages} = useContext(StoreContext);

    return (
<>
             <SingleProjectSui
                projects={pCOWebProjects}
                images={pCOWebImages}
            />
            <SingleProjectSui
                projects={hmiProjects}
                images={hmiImages}
            />
</>
     );
}
 
export default ProjectsSui;