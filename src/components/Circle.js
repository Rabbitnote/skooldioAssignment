const Circle = ({ number, color }) => {
  return (
    <div>
      <div className={color === "green" ? "circle-green" : "circle"}>
        <h1 className="circle-text">{number}</h1>
      </div>
    </div>
  );
};
export default Circle;
