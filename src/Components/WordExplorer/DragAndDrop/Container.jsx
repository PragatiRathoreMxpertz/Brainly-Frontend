
// import update from 'immutability-helper';
// import React, { memo, useCallback, useEffect, useState } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import AllDustbinsComponent from './AllDustbinsComponent.jsx';
// import { Box } from './Box.jsx';
// import { Dustbin } from './Dustbin.jsx';
// import { ItemTypes } from './ItemTypes.js';


// export const Container = memo(function Container( {dragData}) {
//   console.log(dragData)
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activBtn, setactiveBtn] = useState(false)
//   const [allBoxesDropped, setAllBoxesDropped] = useState(false);
 
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === dustbins.length - 1 ? 0 : prevIndex + 1));
//     setactiveBtn(true)

//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? dustbins.length - 1 : prevIndex - 1));
//     setactiveBtn(false)

//   };

//   const [dustbins, setDustbins] = useState(dragData)


//   const currentPage = currentIndex + 1;
//   const totalPages = dustbins.length;


//   const [boxes, setBoxes] = useState(dragData)

//   const column1 = boxes.slice(0, Math.ceil(boxes.length / 2));
//   const column2 = boxes.slice(Math.ceil(boxes.length / 2));

//   const [droppedBoxNames, setDroppedBoxNames] = useState([])


//   function isDropped(boxName, index) {
//     return droppedBoxNames.indexOf(boxName) > -1
//   }


//   const handleDrop = useCallback(
//     (index, item) => {
//       const { name, BoxImg } = item;


//       setDroppedBoxNames(
//         update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
//       );

//       console.log(droppedBoxNames)

//       setDustbins(
//         update(dustbins, {
//           [index]: {
//             lastDroppedItem: {
//               $set: BoxImg
//             }
//           }
//         })
//       );


//       const droppedBoxCount = droppedBoxNames.length + 1;

//       console.log(droppedBoxCount)

//       console.log(boxes.length)
//       if (droppedBoxCount === boxes.length) {
//         setAllBoxesDropped(true);
//       }

//     },

//     [droppedBoxNames, dustbins, boxes,]
//   );

//   useEffect(() => {
//     console.log(allBoxesDropped)
//     if (allBoxesDropped) {
//       setCurrentIndex(dustbins.length - 1);
//       setactiveBtn(true);
//     }
//   }, [allBoxesDropped, dustbins]);

//   if (!dragData || dragData.length === 0) {
//     return <div>No questions available</div>;
// }
//   return (
//     <div>

//       {allBoxesDropped ? (
//         <AllDustbinsComponent dustbins={dustbins} />
//       ) : (
//         <div >
//           <div className="font-medium tracking-normal text-center text-white max-w-[770px] font-poppins font-medium py-6 px-4 worldexplorerHd">
//             Drag Pictures to the matching Words, light up correct pairs, shake for a
//             retry
//           </div>
//           <div className='dragNdrop-box'>

//             <div className='QueBox'>
//               <div style={{ overflow: 'hidden', clear: 'both' }} className='innerQueBox'>
//                 {dustbins.map((dustbin, index) => (
//                   <div key={index} style={{ display: currentIndex === index ? 'block' : 'none' }} className='mainQueCard'>
//                     <Dustbin
//                       accept={dustbin._id}
//                       lastDroppedItem={dustbin.lastDroppedItem}
//                       onDrop={(item) => handleDrop(index, item)}
//                       text={dustbin.text}
//                       currentPage={currentPage}
//                       totalPages={totalPages}
//                       key={index}
//                       word={dustbin.Storytitle} 
//                       meaning={dustbin.Storyttext}
//                       // Synonyms={dustbin.Synonyms}
//                       // Antonyms={dustbin.Antonyms}
//                       // word={boxes[currentIndex].word} 
//                       // meaning={boxes[currentIndex].meaning}
//                     />

//                   </div>

//                 ))}

//               </div >
//               <div className="flex gap-5 justify-center content-start items-center py-4">

//                 <button
//                   onClick={handlePrevious}
//                   disabled={currentIndex === 0}
//                   className={`btnPage `}
//                   style={{ background: activBtn ? '' : 'linear-gradient(99.26deg, #AE5DFF 8.42%, #7F90FF 50.53%, #A891F5 89.39%)' }}
//                 >
//                   <IoIosArrowBack className='arrow' />
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   disabled={currentIndex === dustbins.length - 1}
//                   className={`btnPage `}
//                   style={{ background: activBtn ? 'linear-gradient(99.26deg, #AE5DFF 8.42%, #7F90FF 50.53%, #A891F5 89.39%)' : '' }}
//                 >
//                   <IoIosArrowForward className='arrow' />
//                 </button>
//               </div>


//             </div>

//             <div className='AnsBox'>
//               <div className='innerAnsBox' >
//                 <div className='box1'>

//                   {column1.map(({Storyitext,  Storyimage ,_id}, index) => (
//                     <Box
//                       name={Storyitext}
//                       type={_id}
//                       isDropped={isDropped(Storyitext, index)}
//                       key={index}
//                       BoxImg={Storyimage}
//                       acceptedTypes={dustbins[currentIndex]._id}

//                     />
//                   ))}
//                 </div>
//                 <div className='box1'>

//                   {column2.map(({Storyitext,  Storyimage ,_id}, index) => (
//                     <Box
//                       name={Storyitext}
//                       type={_id}
//                       isDropped={isDropped(Storyitext, index)}
//                       key={index}
//                       BoxImg={Storyimage}
//                       acceptedTypes={dustbins[currentIndex]._id}

//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}
//     </div>
//   )
// })


import update from 'immutability-helper';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AllDustbinsComponent from './AllDustbinsComponent.jsx';
import { Box } from './Box.jsx';
import { Dustbin } from './Dustbin.jsx';
import { ItemTypes } from './ItemTypes.js';

export const Container = memo(function Container({ dragData }) {
  
  console.log(dragData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activBtn, setactiveBtn] = useState(false);
  const [allBoxesDropped, setAllBoxesDropped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === dustbins.length - 1 ? 0 : prevIndex + 1));
    setactiveBtn(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? dustbins.length - 1 : prevIndex - 1));
    setactiveBtn(false);
  };

  const [dustbins, setDustbins] = useState(dragData);
  const currentPage = currentIndex + 1;
  const totalPages = dustbins.length;

  const [boxes, setBoxes] = useState(dragData);

  // Shuffle the boxes array
  useEffect(() => {
    const shuffledBoxes = shuffleArray(boxes);
    setBoxes(shuffledBoxes);
  }, [currentIndex]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const column1 = boxes.slice(0, Math.ceil(boxes.length / 2));
  const column2 = boxes.slice(Math.ceil(boxes.length / 2));

  const [droppedBoxNames, setDroppedBoxNames] = useState([]);

  function isDropped(boxName, index) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const handleDrop = useCallback(
    (index, item) => {
      const { name, BoxImg } = item;

      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );

      console.log(droppedBoxNames);

      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: BoxImg
            }
          }
        })
      );

      const droppedBoxCount = droppedBoxNames.length + 1;

      console.log(droppedBoxCount);

      console.log(boxes.length);
      if (droppedBoxCount === boxes.length) {
        setAllBoxesDropped(true);
      }
    },
    [droppedBoxNames, dustbins, boxes]
  );

  useEffect(() => {
    console.log(allBoxesDropped);
    if (allBoxesDropped) {
      setCurrentIndex(dustbins.length - 1);
      setactiveBtn(true);
    }
  }, [allBoxesDropped, dustbins]);

  if (!dragData || dragData.length === 0) {
    return <div>No questions available</div>;
  }
  return (
    <div>
      {allBoxesDropped ? (
        <AllDustbinsComponent dustbins={dustbins} />
      ) : (
        <div>
          <div className="font-medium tracking-normal text-center text-white max-w-[770px] font-poppins font-medium py-6 px-4 worldexplorerHd">
            Drag Pictures to the matching Words, light up correct pairs, shake for a
            retry
          </div>
          <div className='dragNdrop-box'>
            <div className='QueBox'>
              <div style={{ overflow: 'hidden', clear: 'both' }} className='innerQueBox'>
                {dustbins.map((dustbin, index) => (
                  <div key={index} style={{ display: currentIndex === index ? 'block' : 'none' }} className='mainQueCard'>
                    <Dustbin
                      accept={dustbin._id}
                      lastDroppedItem={dustbin.lastDroppedItem}
                      onDrop={(item) => handleDrop(index, item)}
                      text={dustbin.text}
                      currentPage={currentPage}
                      totalPages={totalPages}
                      key={index}
                      word={dustbin.Storytitle} 
                      meaning={dustbin.Storyttext}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-5 justify-center content-start items-center py-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={`btnPage `}
                  style={{ background: activBtn ? '' : 'linear-gradient(99.26deg, #AE5DFF 8.42%, #7F90FF 50.53%, #A891F5 89.39%)' }}
                >
                  <IoIosArrowBack className='arrow' />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === dustbins.length - 1}
                  className={`btnPage `}
                  style={{ background: activBtn ? 'linear-gradient(99.26deg, #AE5DFF 8.42%, #7F90FF 50.53%, #A891F5 89.39%)' : '' }}
                >
                  <IoIosArrowForward className='arrow' />
                </button>
              </div>
            </div>
            <div className='AnsBox'>
              <div className='innerAnsBox' >
                <div className='box1'>
                  {column1.map(({Storyitext,  Storyimage ,_id}, index) => (
                    <Box
                      name={Storyitext}
                      type={_id}
                      isDropped={isDropped(Storyitext, index)}
                      key={index}
                      BoxImg={Storyimage}
                      acceptedTypes={dustbins[currentIndex]._id}
                    />
                  ))}
                </div>
                <div className='box1'>
                  {column2.map(({Storyitext,  Storyimage ,_id}, index) => (
                    <Box
                      name={Storyitext}
                      type={_id}
                      isDropped={isDropped(Storyitext, index)}
                      key={index}
                      BoxImg={Storyimage}
                      acceptedTypes={dustbins[currentIndex]._id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
