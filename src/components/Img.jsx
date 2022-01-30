import pic from "../assets/image/collins.jpg";
import "./Img.scss";

function Img({ width = 60, height = 60 }) {
  return (
    <img
      src={pic}
      alt="profileImage"
      className="image"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}

export default Img;
