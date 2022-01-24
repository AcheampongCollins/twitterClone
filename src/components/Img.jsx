import pic from "../assets/image/collins.jpg";
import "./Img.scss";

function Img({ width, height }) {
  return (
    <img
      src={pic}
      alt="profileImage"
      className="image"
      style={{ width: `${width}`, height: `${height}` }}
    />
  );
}

export default Img;
