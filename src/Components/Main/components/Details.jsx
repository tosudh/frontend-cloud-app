import React from 'react'
// import FolderIcon from '@mui/icons-material/Folder';
import FolderIcon from '@mui/icons-material/Folder';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
function Details({onClick}) {
    return (
        <div id="detail-panel">
            <div id="detail-header">
                <FolderIcon />
                <span>Pic-840555</span>
                <IconButton>
                    <CloseIcon onClick={onClick} />
                </IconButton>
            </div>
            <div id="detail-info">
                <h2>Properties</h2>
                <span>Type</span><span>Image</span><br />
                <span>Size</span><span>92KB</span><br />
                <span>Location</span><span>Trip</span><br />
                <span>Modified</span><span>Today</span><br />
            </div>
        </div>
    )
}

export default Details
