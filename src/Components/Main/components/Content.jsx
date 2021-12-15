import React, { useState } from 'react'

import Folder from './Media/Folder';
import File from './Media/File';
import Image from './Media/Image';
import Details from './Details';

function Content() {
    const [detailReq, setDetailReq] = useState(false)
    function showDetails() {
        setDetailReq(!detailReq)
    }
    return (
        <>
        <div id="content-container">
            <Folder onClick={showDetails} name="Goa Trip"></Folder>
            <Folder onClick={showDetails} name="Ladakh Trip"></Folder>
            <Folder  onClick={showDetails}name="Assam Trip"></Folder>
            <Folder  onClick={showDetails}name="US Trip"></Folder>
        </div>
        {detailReq && <Details onClick={showDetails}/>}
        
        
        </>
    )
}

export default Content
