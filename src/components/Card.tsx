export type Cardsprops = {
  text_card: string;
};

function Card({ text_card }: Cardsprops) {
  return (
    <>

    
      <div className="w-72 h-72 bg-red-600 flex justify-center items-center rounded-lg shadow-lg shadow-black">
        <div className="w-64 h-64 bg-orange-500 flex justify-center items-center rounded-lg shadow-lg shadow-black">
          <div className="bg-yellow-400 w-56 h-56 flex justify-center items-center rounded-lg shadow-lg shadow-black transform hover:scale-105 transition-transform duration-300">
            <h1 className="bg-white w-44 h-44 text-center text-3xl flex items-center justify-center text-indigo-900 font-bold rounded-lg">
              {text_card}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
