import React, { useState } from "react";
import IconStar from "../../images/icon-star.svg";
import Button from "../Button/Button";
import ButtonNr from "../ButtonNr/ButtonNr";
import ThankYouCard from "../ThankYouCard/ThankYouCard";
import "./index.css";

const Card = () => {
  const [value, setValue] = useState(0);
  const [submit, isSubmitted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    isSubmitted(true);
    setValue(value);
    console.log(value);
  };

  return (
    <main className="container">
      <div className="content">
        {submit ? (
          <ThankYouCard
            value={value}
            setValue={setValue}
            isSubmitted={isSubmitted}
          />
        ) : (
          <>
            <div className="Card">
              <div className="Card__star">
                <img src={IconStar} alt="icon-star" />
              </div>
              <h2 className="Card__title">How did we do? </h2>
              <p className="Card__description">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className="Card__rating">
                <ButtonNr value="1" onClick={handleClick}>
                  1
                </ButtonNr>
                <ButtonNr value="2" onClick={handleClick}>
                  2
                </ButtonNr>
                <ButtonNr value="3" onClick={handleClick}>
                  3
                </ButtonNr>
                <ButtonNr value="4" onClick={handleClick}>
                  4
                </ButtonNr>
                <ButtonNr value="5" onClick={handleClick}>
                  5
                </ButtonNr>
              </div>
              <Button
                setValue={setValue}
                onClick={handleSubmit}
                btnText="SUBMIT"
                className="submit"
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Card;
