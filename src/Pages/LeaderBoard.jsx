

import React, { useEffect } from 'react'
import Heading from '../Components/Heading'
import "../Styles/LeaderBoard.css"
import { useDispatch, useSelector } from "react-redux";
import { Fetch_LeaderBoardData_For_Current_Weeked } from "../store/Actions/LeaderBoardActions"

function LeaderBoard() {
  const AllLeaderBoardData = useSelector((state) => state.LeaderBoard.LeaderBoardData);
  console.log(AllLeaderBoardData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetch_LeaderBoardData_For_Current_Weeked());
  }, []);


  const sortedLeaderBoardData = AllLeaderBoardData.slice().sort((a, b) => b.QuestionsCorrectCount - a.QuestionsCorrectCount);

  return (
    <div>
      <div>
        <Heading blueText="Leader" whiteText="Board" />
      </div>
      <div className=' flex justify-center table-fixed' >
        <div className='table box'>
          {sortedLeaderBoardData.map((item, id) => (
            <div key={id} className={` ${id % 2 === 0 ? "bg-[#FAFAFA1A]" : "bgTrans"} ${id === sortedLeaderBoardData.length - 1 ? "lastIndex" : "tableTextBox "} ${id === 0 ? "rounded-t-[10px]" : ""} `}>
              <p className='text-white font-Nunito tb-text w-[20%]'>{id + 1}</p>
              <p className='text-white font-Nunito tb-text w-[70%]'>{item.StudentId.Username}</p>
              <p className='font-Nunito tb-text w-[30%] scoreText'>{item.QuestionsCorrectCount}/{item.TotalquestionsattemptedCount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard;
