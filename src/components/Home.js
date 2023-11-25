import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {navNames} from "../utils/constants";
import {withHeroId} from "../hoc/withHeroId";
import {withErrorPage} from "../hoc/withErrorPage";

const Home = () => {

    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
}

export default withErrorPage(navNames[0].route)(Home);