import React, {useCallback} from 'react';
import {cardContentClasses} from "@mui/material";
import RaceView from "Components/Views/RaceView";
import {useDispatch, useSelector} from "react-redux";
import {setYourRace, setEnemyRace} from "store/counterSlice";
import Button from '@mui/material/Button';
import BasicModal from "Components/BasicModal";
import UnitListView from "Components/Views/UnitListView";

const Calc = () => {
    const yourRace = useSelector((state) => state.counter.yourRace)
    const enemyRace = useSelector((state) => state.counter.enemyRace)
    const dispatch = useDispatch()

    const yourRaceSetter = useCallback((race) => {
        dispatch(setYourRace(race));
    }, [dispatch]);

    const enemyRaceSetter = useCallback((race) => {
        dispatch(setEnemyRace(race));
    }, [dispatch]);


    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>

            <BasicModal
                isOpen={open}
                onClose={handleClose}
            >
                <UnitListView/>
            </BasicModal>

            <h4>Current race = {yourRace}, enemy = {enemyRace}</h4>
            <RaceView
                title={'Your race'}
                onChange={yourRaceSetter}
                value={yourRace}
            />
            <br/>
            <RaceView
                title={'Enemy race'}
                onChange={enemyRaceSetter}
                value={enemyRace}
            />

            <pre>



            [race] result [race]
                <br/>

            unit-composition     target
<br/>




            ===
<br/>
            unit view
<br/>
            unit modal+list
<br/>

        </pre>
        </>
    );
};

export default Calc;


