const FeedbackBtn = ({ option, children, onClick }) => {
  return (
    <li key={option}>
      <button type="button" key={option} value={option} onClick={onClick}>
        {option}
        {children}
      </button>
    </li>
  );
};
export default FeedbackBtn