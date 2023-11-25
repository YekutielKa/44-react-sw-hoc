import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {characters, StarWarsContext} from "../utils/constants";
import {withErrorPage} from "../hoc/withErrorPage";

const Header = () => {
    const {hero} = useContext(StarWarsContext);
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-1">{characters[hero].name}</h1>
        </header>
    );
};

export default withErrorPage()(Header);