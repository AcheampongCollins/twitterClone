import "./ButtonsComponent.scss";
function ButtonsComponent({
  width = 50,
  height = 50,
  padding = 15,
  color = "red",
  text = "tweet",
  radius = 100,
}) {
  return (
    <button
      className="tweet"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `${color}`,
        padding: `${padding} 0px`,
        borderRadius: `${radius}%`,
      }}
    >
      {text}
    </button>
  );
}

export default ButtonsComponent;
