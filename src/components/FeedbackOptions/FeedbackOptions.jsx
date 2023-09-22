import FeedbackBtn from 'components/Feedback/FeedbackBtn';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.listBtn}>
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
