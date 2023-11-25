import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {characters, defaultHero, navNames, StarWarsContext} from "../utils/constants";

export const withHeroId = route => Component => props => {
    const {hero: heroId} = useParams();
    const navigate = useNavigate();
    const {changeHero} = useContext(StarWarsContext);

    useEffect(() => {
        if (!characters[heroId]) {
            navigate(`/${route}/${defaultHero}`)
            return;
        }
        changeHero(heroId);
    }, [heroId]);

    return <Component heroId={heroId} {...props}/>
}