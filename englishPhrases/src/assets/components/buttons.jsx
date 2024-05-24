
const Button = ({ id, text, onClicks }) => {
    return (
      <button id={id} onClick={onClicks} className="buts">
        {text}
      </button>
    );
  };

export default Button;