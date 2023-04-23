import PropTypes from 'prop-types';
import css from './Statistics.module.css';
// import sectionCss from '../section/Section.module.css'

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id} style={getRandomColor()}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}> {stat.percentage}</span>
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

function getRandomColor() {
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  const itemColor = {
    backgroundColor: randomColor,
  };

  return itemColor;
}
