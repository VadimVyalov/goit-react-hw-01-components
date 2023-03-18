import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Item } from './Statistics.styled';

const Statistics = ({ title, items }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {items.map(({ id, label, percentage }) => (
          <Item key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </Item>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default Statistics;

// const StatisticsItem = ({ item: { label, percentage } }) => {
//   const bgColor = getRandomHexColor();
//   return (
//     <li className={css.item} style={{ backgroundColor: bgColor }}>
//       <span className={css.label}>{label}</span>
//       <span className={css.percentage}>{percentage}%</span>
//     </li>
//   );
// };

// const Statistics = ({ title, items }) => {
//   return (
//     <section className={css.statistics}>
//       {title && <h2 className={css.title}>{title}</h2>}
//       <ul className={css['stat-list']}>
//         {items.map(item => (
//           <StatisticsItem key={item.id} item={item} />
//         ))}
//       </ul>
//     </section>
//   );
// };
