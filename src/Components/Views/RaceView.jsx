import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

const RaceView = ({title, value, onChange}) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>{title}</InputLabel>
                <Select
                    value={value}
                    label={title}
                    onChange={handleChange}
                >
                    <MenuItem value={'Terran'}>Terran</MenuItem>
                    <MenuItem value={'Zerg'}>Zerg</MenuItem>
                    <MenuItem value={'Protoss'}>Protoss</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

RaceView.propTypes = {

};

export default RaceView;