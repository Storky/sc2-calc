import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";
import {units} from "data";

const style = {
    p: 4,
    background: 'orange',
};


const UnitListView = () => {
    const race = useSelector((state) => state.counter.yourRace)

    React.useEffect(() => {
        console.log('race', race);
        console.log('unit', units[race.toLocaleLowerCase()] );
    }, [race]);

    return (
        <Paper elevation={3} sx={style}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ducimus facilis hic incidunt nesciunt officia quo rerum vel veniam voluptatibus?
        </Paper>

    );
};

UnitListView.propTypes = {

};

export default UnitListView;