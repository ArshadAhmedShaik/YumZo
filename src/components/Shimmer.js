const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-container">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-img"></div>
              <div className="shimmer-line short"></div>
              <div className="shimmer-line long"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
