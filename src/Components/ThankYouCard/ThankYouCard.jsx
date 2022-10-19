import ThanksIcon from "../../images/illustration-thank-you.svg";
import "./index.css";

const Card = (props) => {
  return (
    <div className="ThankYouCard">
      <div className="ThankYouCard__icon">
        <img src={ThanksIcon} alt="thankyou-icon" />
      </div>
      <p className="ThankYouCard__score">You selected {props.value} out of 5</p>
      <h2 className="ThankYouCard__title">Thank you! </h2>
      <p className="ThankYouCard__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Card;
