import cardsProps from '../components.json';
import CardConteudo from './CardConteudo';

const CardConteudoview = () => {
  const { text_card_conteudo1, text_card_conteudo2, text_card_conteudo3, buttonSubscribe } = cardsProps[0] || {};

  return (
    <div className="flex flex-col flex-wrap justify-center gap-8 mt-8 items-center lg:flex-row">
      <div className="">
        <CardConteudo
          text_card_conteudo1={text_card_conteudo1 || ''}
          text_card_conteudo2={text_card_conteudo2 || ''}
          text_card_conteudo3={text_card_conteudo3 || ''}
          buttonSubscribe={buttonSubscribe || ''}
        />
      </div>
    </div>
  );
};

export default CardConteudoview;
