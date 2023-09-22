import css from './FeedbackBtn.module.css'

const FeedbackBtn = ({ option, children, onClick }) => {
  return (
    <li key={option} className={css.itemBtn}>
      <button type="button" key={option} value={option} onClick={onClick} className={css.button}>
        {option}
        {children}
      </button>
    </li>
  );
};
export default FeedbackBtn