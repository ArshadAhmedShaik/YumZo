import { useState } from "react";
import PracticeAccordian from "./PracticeAccordian";

const Practice = () => {

 const [ showIndex, setShowIndex ] = useState(-1);


  return (
    <>
      <h1 className="text-center font-medium text-3xl">Accordians in React!</h1>


      <div className="shadow min-h-32 p-2 my-7 rounded bg-pink-100">


        {Array(3)
          .fill(0)
          .map((_, index) => {
             return <PracticeAccordian showIndex={showIndex} setShowIndex={setShowIndex} index={index} key={index} showList={(index === showIndex)?true:false}/>
          })}


      </div>


    </>
  );
};

export default Practice;
