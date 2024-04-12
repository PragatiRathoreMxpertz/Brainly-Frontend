import React from 'react'
import DragNDrop from '../Components/WordExplorer/DragNDrop'


function WordExplorer({WordExplorerData}) {
console.log(WordExplorerData)

    return (
        <div className='flex flex-wrap justify-center content-start items-center ' >
            
            <div style={{width:"100%"}}>
                <DragNDrop WordExplorerData={WordExplorerData}/>
            </div>
        </div>
    )
}

export default WordExplorer