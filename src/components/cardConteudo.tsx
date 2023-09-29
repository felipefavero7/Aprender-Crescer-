
export type CardsConteudoprops = {
  text_card_conteudo1: string;
  text_card_conteudo2: string;
  text_card_conteudo3: string;
  text_card_conteudo4: string;
  buttonSubscribe: string;
};


export function CardConteudo({ text_card_conteudo1, text_card_conteudo2,text_card_conteudo3,text_card_conteudo4,buttonSubscribe,}: CardsConteudoprops) {
  
  return (
    <>
      <section>
        <div className="mt-12 w-9/12 h-96 mx-auto my-auto flex flex-col  card  relative justify-center">
          <h1 className="text-center mt-1  text-2xl text-indigo-900 font-bold p-6 max-md:text-sm max-xl:text-lg">
            {text_card_conteudo1}
            <br /> <h1 className="ml-4">{text_card_conteudo2}</h1>
          </h1>
        </div>

        <div className="flex justify-around mt-8 items-center flex-wrap gap-8 break-normal ">
          <span className=" custom-card ">{text_card_conteudo3}</span>
          <span className=" custom-card">{text_card_conteudo4}</span>
          </div>
          <button className="w-52 h-16 rounded-full text-2xl bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold hover:bg-orange-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform duration-300 ease-in-out">
            {buttonSubscribe}
          </button>
        
      </section>
    </>
  );
}

export default CardConteudo;
