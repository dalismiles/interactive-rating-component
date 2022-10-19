import "./index.css";

const Button = ({ onClick, btnText }) => {
  return (
    <button onClick={onClick} className="Button">
      {btnText}
    </button>
  );
};

export default Button;
