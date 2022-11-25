import React, {useCallback} from 'react';
import {cardContentClasses} from "@mui/material";
import RaceView from "Components/Views/RaceView";
import {useDispatch, useSelector} from "react-redux";
import {setYourRace, setEnemyRace} from "store/counterSlice";

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



    return (
        <>


            <br/>
            <div>kkkk</div>


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


