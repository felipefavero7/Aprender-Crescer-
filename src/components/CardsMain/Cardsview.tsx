import Card from './Card';
import Cardjson from '../components.json';

const Cardsview = () => {
  const { text_card1, text_card2, text_card3 } = Cardjson[1] || {};

  return <Card text_card1={text_card1 || ''} text_card2={text_card2 || ''} text_card3={text_card3 || ''} />;
};

export default Cardsview;
