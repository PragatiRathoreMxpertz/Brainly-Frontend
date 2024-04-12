import React from 'react'
import Heading from '../Components/Heading'
import ScienceTab from '../Components/ScienceStories/ScienceTab'
import "../Styles/ScienceFictionStories.css"

function StoryGener() {
    constStoryTypeData= [
        {
           
            title:"Science Fiction Stories              ",
            StoryData:[
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
        
            ]
        },
        {
           
            title:"Fantasy Stories",
            StoryData:[
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
        
            ]
        },
        {
           
            title:"Adventure Storie s",
            StoryData:[
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
        
            ]
        },
        {
           
            title:"Mystery Stories  ",
            StoryData:[
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
        
            ]
        },


        {
           
            title:"History Stories",
            StoryData:[
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
        
            ]
        },
        {
           
            title:"Sport",
            StoryData:[
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg1,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg2,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg3,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg4,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg5,
                    text: "The Galactic Time Travelers",
                    btnText: "Completed"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
                {
                    stryIMg: stryImg6,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg7,
                    text: "The Galactic Time Travelers",
                    btnText: "New"
                },
                {
                    stryIMg: stryImg8,
                    text: "The Galactic Time Travelers",
                    btnText: "In Progress"
                },
        
            ]
        },
       


    ]
  return (
    <div>
        <div  className='text-[42px] pb-4'>
            <Heading blueText="Science" whiteText="Fiction Stories " />
        </div>
        <div>
            <ScienceTab/>
        </div>
    </div> 
  )
}

export default StoryGener;