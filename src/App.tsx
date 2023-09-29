import inicioSite from './components/images/inicio-site.png';
import Cards from './components/Card';
import Carousels from './components/CarouselImagens/carouselHeader';
import Videos from './components/Videos';
import Comment from './components/Comment';
import Cardview from './components/Cardview'; // Certifique-se de fornecer o caminho correto
import Carouselview from './components/CarouselImagens/Carouselview';

function App() {
  return (
    <>
      <body className="p-8 imagem-fundo">
        <main>
          <section>
            <div className="flex justify-center">
              <img src={inicioSite} alt="" />
            </div>
          </section>

          <div>
            <Carouselview/>
          </div>

          <section className="flex justify-evenly flex-wrap gap-8 p-20 break-normal">
            <Cards text_card="+5 Cidades" />
            <Cards text_card="+25 Edições" />
            <Cards text_card="+1300 alunos" />
          </section>
          
          <div>
            <Cardview />
          </div>

          <Videos
            URLvideos1="https://www.youtube.com/embed/pBtdgB8AI8A?si=4L63j9qUv-Vjoa6f"
            URLvideos2="https://www.youtube.com/embed/XIWjTn88CRU?si=neUXL71bphAyDKrc"
            URLlogo="https://sudotec.org.br/imgs/logomarca.png"
          />

          <Comment
            comments={[
              {
                comment: 'Comentário 1',
                name: 'Nome 1',
                photo: 'url-da-foto-1.jpg',
              },
              {
                comment: 'Comentário 2',
                name: 'Nome 2',
                photo: 'url-da-foto-2.jpg',
              },
            ]}
          />
        </main>
      </body>
    </>
  );
}

export default App;
