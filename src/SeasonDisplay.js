
import './seasonDisplay.css'
import React from 'react';

const seasonConfig ={
    Winter: {
        text: 'Burr, it\'s Chilly',
        iconName: 'snowflake'
    },
    Summer: {
        text: 'Let\'s Hit the Beach',
        iconName:'sun'
    }
};


const getSeason = (lat, month) => {
    if (month > 0 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}


const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName}= seasonConfig[season];
    console.log(season);
    return (
        <div className={`SeasonDisplay ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;