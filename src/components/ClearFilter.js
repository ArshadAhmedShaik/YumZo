import mockData from "../utils/mockData";

const ClearFilter = ({
    func: setListOfRestaurants
}) => {
        return (
            <button className = "clear-filter-button" onClick = {
                () => {
                    setListOfRestaurants([]);
                    setListOfRestaurants(mockData?.dataArray);
                }
            }>Clear Filter</button>
        );
}

export default ClearFilter;