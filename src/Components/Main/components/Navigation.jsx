import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

function Navigation() {
    return (
            <nav>
                <ul>
                    <li id="new-link"><AddCircleIcon/>
                    <a href="#">New</a></li>

                    <li><WorkspacesIcon/>
                    <a href="#">My Space</a></li>
                    
                    <li><TurnedInIcon/>
                    <a href="#">Star</a></li>
                    
                    <li><DeleteOutlineIcon/>
                    <a href="#">Trash</a>
                    </li>

                </ul>
            </nav>
    )
}

export default Navigation
