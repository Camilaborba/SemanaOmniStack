import React from 'react';
import logoImg from '../../asserts/images/logo.svg';
import landinImg from '../../asserts/images/landing.svg';
import studyIcon from '../../asserts/images/icons/study.svg';
import giveClassesIcon from '../../asserts/images/icons/give-classes.svg';
import purpleHeartIcon from '../../asserts/images/icons/purple-heart.svg';

function Landing(){
    return(
        <div id ="page-lading">
            <div id = "page-lading-content" className= "container">
            <div className="log-container">
                <img src={logoImg} alt="Proffy"></img>
                <h2>Sua plataforma de estudos online.</h2>
            </div>
            <img src={landinImg} alt ="Plataforma de estudos" className = "hero-image"></img>
            <div className = "button-coitainer">
                <a href="" className="study">
                     <img src={studyIcon} alt="Estudar"></img>
                      Estudar
                 </a>
                <a href="" className="give-classes">
                    <img src={giveClassesIcon} alt="Estudar"></img>
                        Dar aulas
                    </a>
            </div>
            <span className="total-connections">
              Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"></img>
            </span>
            </div>
        </div>
    )
}

export default Landing;