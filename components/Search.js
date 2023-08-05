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
                bgcolor: 'custom.background',
                border: 'none',
                minHeight: '44px',
                borderRadius: '5px',
                px: 1,
            }}>
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    'input::placeholder': {
                        fontSize: '13px',
                    },
                }}
                placeholder='Search...'
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
