import React from 'react';
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import Home from "./Home";
import {navNames} from "../utils/constants";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = () => {

    return (
        <Routes>
            {['/', navNames[0].route, `${navNames[0].route}/:hero`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
            {[navNames[1].route, `${navNames[1].route}/:hero`].map(path =>  <Route key={path} path={path} element={<AboutMe/>}/>)}
            <Route path={`${navNames[2].route}/:hero`} element={<StarWars/>}/>
            <Route path={`${navNames[3].route}/:hero`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Main;