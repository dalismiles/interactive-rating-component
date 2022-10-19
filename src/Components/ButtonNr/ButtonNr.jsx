import "./index.css";

const ButtonNr = ({ value, onClick, children }) => {
  return (
    <button className="ButtonNr" value={value} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonNr;
