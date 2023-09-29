import Carousels from './carouselHeader';
import componentsJson from '../components.json';

const Carouselview = () => {
  const { imageUrls } = componentsJson[3];

  return (
    <div>
      <Carousels imageUrls={imageUrls || []} />
    </div>
  );
};

export default Carouselview;
