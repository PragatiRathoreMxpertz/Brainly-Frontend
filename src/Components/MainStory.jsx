import React, { useEffect } from 'react'
import Heading from './Heading'
import Tabs from './Tabs'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function MainStory() {
    // const blueText = "The Lost City of"
    // const whiteText = "Future Earth"
    const { id } = useParams();
    const location = useLocation();
    const { state } = location;

    if (!state) {
        return <div>No data available</div>;
    }

    const { Brainquest, Storyadvenure, Wordexplore, endPoints, StoryTitle } = state;


    console.log('Brainquest:', Brainquest);
    console.log('Storyadvenure:', Storyadvenure);
    console.log('Wordexplore:', Wordexplore);
    console.log('endPoints:', endPoints);
    console.log("title", StoryTitle)

    function countWords(str) {
        return str.trim().split(/\s+/).length;
    }


    const inputString = StoryTitle;

    const wordCount = countWords(inputString);

    const wordsArray = inputString.trim().split(/\s+/);

    const blueTextWordCount = Math.ceil(wordCount / 2);
    const whiteTextWordCount = wordCount - blueTextWordCount;

    const blueText = wordsArray.slice(0, blueTextWordCount).join(" ");
    const whiteText = wordsArray.slice(blueTextWordCount).join(" ");

    return (
        <div>
            <div className='storyHd'>
                <Heading blueText={blueText} whiteText={whiteText} />
            </div>

            <Tabs Brainquest={Brainquest} Storyadvenure={Storyadvenure} Wordexplore={Wordexplore} />

        </div>
    )
}

export default MainStory