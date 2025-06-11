import {useEffect, useState} from 'react';

function Animation(params) {
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        setFadeIn(true);
    }, []);
    
    return (
        console.log("Animation component loaded")
    );
}

export default Animation;