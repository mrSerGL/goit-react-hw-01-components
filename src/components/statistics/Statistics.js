import PropTypes from 'prop-types';
import './Statistics';

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics section">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage"> {stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
