import Carousels from './carouselHeader';
import CarouselImageprops from '../components.json'; // Certifique-se de usar o caminho correto para o JSON

const Carouselview = () => {
  // Acessa o array de imagens a partir do JSON
  const { imageUrls } = CarouselImageprops[0] || {};

  return (
    <div className="flex flex-col flex-wrap justify-center gap-8 mt-8 items-center lg:flex-row">
      <div className=''>
        <Carousels
          imageUrls={imageUrls || []} // Passa a array diretamente ou um array vazio se for undefined
        />
      </div>
    </div>
  );
};

export default Carouselview;
