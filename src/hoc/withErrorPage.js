import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {characters, StarWarsContext} from "../utils/constants";

export const withErrorPage = route => Component => props => {
    const {hero: heroId} = useParams();
    const navigate = useNavigate();
    const {changeHero} = useContext(StarWarsContext);

    useEffect(() => {
        if (!characters[heroId]) {
            navigate(`/O-o-ops`)
            return;
        }
        changeHero(heroId);
    }, [heroId]);

    return <Component />
}