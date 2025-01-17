import React from 'react'
import Heading from "../Heading"
import Paragraphs from '../Paragraphs'
import Button from '../Button'
import HomeImg1 from "../../Assets/Images/home-img-1.png"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Revolutionize() {
    const isAuthenticated  = useSelector((state) => state.auth.isAuthenticated);
    console.log(isAuthenticated)
    return (
        <div>

            <div className="justify-between">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center px-5 py-2.5 text-lg  max-md:max-w-full">
                            <div className="sm:text-left text-center">
                                <Heading blueText="Revolutionize Your Child's 11 Plus " whiteText=" Vocabulary Preparation!" />
                            </div>
                            <Paragraphs para="Designed by experienced parents, our app modernizes 11 Plus vocab
                                prep with fun, science-driven techniques. Enjoy interactive
                                exercises, diverse stories, smart assessments, and spaced
                                repetition for better learning and retention. Join Brainy Lingo
                                for a superior study experience and see your child's vocabulary
                                soar."/>

                            <div className="flex justify-center sm:self-start self-center sm:mt-10 mt-4 font-semibold tracking-normal text-black sm:py-0 py-4">
                            <Link to={`${isAuthenticated ? "/LeaderBoard":"/SignUpPage"}`}>
                                        <Button btnText="Get Started" />
                                    </Link>  
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col justify-center self-stretch py-4 px-4 my-auto max-md:mt-10 p-4">
                            <img
                                src={HomeImg1}
                                alt='home1'
                                className="w-full aspect-[0.95]  hideImage "
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Revolutionize