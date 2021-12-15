import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorageIcon from '@mui/icons-material/Storage';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <>
            <header>
            <IconButton>
                <MenuIcon />
            </IconButton>
                <span id="logo-container">
                <StorageIcon id="logo"/>SKDrive
                </span>
                <div id="search-container">
                <input placeholder="Search file" autocomplete="off"/>
                </div>
                <IconButton>
                <AccountCircleIcon id="user-icon"/>
                </IconButton>
            </header>
        </>
    )
}

export default Header
