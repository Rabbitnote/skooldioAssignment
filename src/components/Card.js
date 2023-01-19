import Circle from "../components/Circle";
const Card = ({ icon, facultyName, university, name, roundSeat, score }) => {
  return (
    <div className="container-card">
      <div className="header-part">
        <img src={icon} className="icon" alt="icon" />
        <div className="header-faculty">
          <div className="contianer-header">
            <h1 className="header-name">{facultyName}</h1>
            <h1 className="header-subname">{name}</h1>
          </div>
          <h1 className="header-uni">{university}</h1>
        </div>
        <img src="" alt="heart" />
      </div>
      <div className="line" />
      <div className="container-roundseat">
        <h1 className="text-roundseat">รอบที่เปิด</h1>
        <div className="container-circle">
          {roundSeat.map((item,index) => {
            return index === 0 || index === 1 || index === 3 ? (
              <Circle number={item} color="green" />
            ) : (
              <Circle number={item} color="grey" />
            );
          })}
        </div>
      </div>
      <div className="container-admission">
        <h2 className="text-admission">รอบที่ 4: Admission</h2>
        <button className="button">
          แก้ไขคะแนน <img src="" alt="Icon" />{" "}
        </button>
      </div>
      <div className="container-yourscore">
        <img src="" alt="Icon" />
        <div>
          <h1 className="yourscore">คะแนนของคุณคือ</h1>
          <h1 className="score">235453</h1>
        </div>
      </div>
      <div className="conatiner-score">
        <div className="container-text-score">
          <h1 className="text-score-bold">{score?.min ? score?.min : 0}</h1>
          <h1 className="text-score">คะแนนต่ำสุด 60</h1>
        </div>
        <div className="vertical-line" />
        <div className="container-text-score">
          <h1 className="text-score-bold">{score?.avg ? score?.avg : 0}</h1>
          <h1 className="text-score">คะแนนเฉลี่ย 60</h1>
        </div>
        <div className="vertical-line" />
        <div className="container-text-score">
          <h1 className="text-score-bold">{score?.max ? score?.max : 0}</h1>
          <h1 className="text-score">คะแนนสูงสุด 60</h1>
        </div>
      </div>
    </div>
  );
};
export default Card;
