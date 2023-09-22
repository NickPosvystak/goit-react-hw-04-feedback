import css from './Statistic.module.css'

const Statistics = ({ good, neutral, bad, total, positive }) => {
    return (
      <div>
        <div className={css.statistics}>
          <p>
            <b>Good: </b>
            {good}
          </p>
          <p>
            <b>Neutral: </b>
            {neutral}
          </p>
          <p>
            <b>Bad: </b>
            {bad}
          </p>
        </div>
        <div className={css.totalBox}>
          <p>Total: {total}</p>
          <p>Positive feedback: {positive} %</p>
        </div>
      </div>
    );
}

export default Statistics;
