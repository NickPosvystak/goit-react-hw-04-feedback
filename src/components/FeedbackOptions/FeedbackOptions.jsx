import FeedbackBtn from "components/Feedback/FeedbackBtn";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <FeedbackBtn
            key={option}
            type="button"
            value={option}
            children={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackBtn>
        );
      })}
    </ul>
  );
};
export default FeedbackOptions;
