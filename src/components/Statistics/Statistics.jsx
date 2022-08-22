import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsText } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <StatisticsText>Good: {good}</StatisticsText>
      <StatisticsText>Neutral: {neutral}</StatisticsText>
      <StatisticsText>Bad: {bad}</StatisticsText>
      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
