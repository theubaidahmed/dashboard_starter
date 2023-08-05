import { IconButton, InputBase, Paper } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Search = () => {
    return (
        <Paper
            component='form'
            elevation={0}
            variant='outlined'
            sx={{
                px: '3px',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'custom.search.main',
                border: 'custom.border',
                minHeight: '45px',
            }}>
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                }}
                placeholder='Search here'
                inputProps={{
                    'aria-label': 'search google maps',
                }}
            />

            <IconButton type='button' aria-label='search'>
                <SearchIcon fontSize='small' />
            </IconButton>
        </Paper>
    );
};

export default Search;
