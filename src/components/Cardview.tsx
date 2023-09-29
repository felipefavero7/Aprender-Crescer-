import cardsProps from '../components.json';
import CardConteudo from './cardConteudo';

const Cardview = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-8 mt-8 items-center lg:flex-row">
      {cardsProps.map(({ text_card_conteudo1, text_card_conteudo2, text_card_conteudo3, text_card_conteudo4, buttonSubscribe }) => (
        
        <div className='custom-card'>
        <CardConteudo 
          text_card_conteudo1={text_card_conteudo1 || ""}
          text_card_conteudo2={text_card_conteudo2 || ""}
          text_card_conteudo3={text_card_conteudo3 || ""}
          text_card_conteudo4={text_card_conteudo4 || ""}
          buttonSubscribe={buttonSubscribe || ""}
        />

</div>
      ))}
    </div>
  );
};

export default Cardview;
