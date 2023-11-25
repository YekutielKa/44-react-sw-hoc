import React from 'react';
import {navNames, starWarsInfo} from "../utils/constants";
import style from "../css/farGalaxy.module.css";
import {withHeroId} from "../hoc/withHeroId";

const StarWars = () => {

    return (
        <div className={style.farGalaxy}>
            <p>{starWarsInfo}</p>
        </div>
    );

}

export default withHeroId(navNames[2].route)(StarWars);