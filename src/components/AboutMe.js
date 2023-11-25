import React, {useEffect, useState} from 'react';
import {base_url, characters, navNames, period_month} from "../utils/constants";
import {withHeroId} from "../hoc/withHeroId";

const AboutMe = ({heroId}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [hero, setHero] = useState();

    useEffect(() => {
        const hero1 = JSON.parse(localStorage.getItem(heroId));
        if (hero1 && (Date.now() - hero1.time) < period_month) {
            setIsLoading(false);
            setHero(hero1.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    let payload = {
                        "name": data.name,
                        "birth_year": data.birth_year,
                        "eye_color": data.eye_color,
                        "skin_color": data.skin_color,
                        "gender": data.gender,
                        "img": data.image
                    };
                    setIsLoading(false);
                    setHero(payload);
                    localStorage.setItem(heroId, JSON.stringify({time: Date.now(), payload}));
                })
        }
    }, [])

    if (isLoading) {
        return (
            <div className="spinner-border"></div>
        );
    } else {
        return (
            <div>
                <h1>Name: {hero.name}</h1>
                <h2>Birth year: {hero.birth_year}</h2>
                <h3>Gender: {hero.gender}</h3>
                <h4>Eye color: {hero.eye_color}</h4>
                <h5>Skin color: {hero.skin_color}</h5>
                <img src={`${base_url}/${hero.img}`} alt={hero.name}
                     name={hero.name} title={hero.name}/>
            </div>
        );
    }
}

export default withHeroId(navNames[1].route)(AboutMe);