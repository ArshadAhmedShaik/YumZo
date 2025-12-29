const PracticeAccordian = (props) => {
  const index = props?.index;
  const showList = props?.showList;
  const showIndex = props?.showIndex;
  const setShowIndex = props?.setShowIndex;

  const handleClick = () => {


    if (showIndex !== index) {
      setShowIndex(index);
    } else {
      setShowIndex(-1);
    }

  };

  return (
    <div className="my-4 bg-amber-50 mx-2">
      <div
        onClick={handleClick}
        className="active:bg-amber-200 shadow bg-amber-100 rounded-t-sm  p-2 flex justify-between items-center cursor-pointer"
      >
        <div className="font-medium text-xl"> Accordian {index}</div>
        {(showList) ? <div>⬆️</div> : <div>⬇️</div> } 
      </div>

      {showList && (
        <div className="my-1 shadow bg-amber-100 flex-col rounded-b-sm  p-2">
          <div>- List Item 1</div>
          <div>- List Item 2</div>
          <div>- List Item 3</div>
        </div>
      )}
    </div>
  );
};

export default PracticeAccordian;
