import inicioSite from './components/images/inicio-site.png';
import CardConteudoview from './components/CardsConteudos/CardConteudoview';
import Carouselview from './components/CarouselImagens/Carouselview';
import Videosview from './components/Videos/Videosview';
import Cardsview from './components/CardsMain/Cardsview';
import Commentview from './components/Comments/Commentview';

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

          <Carouselview />

          <Cardsview />

          <CardConteudoview />

          <Videosview />

          <Commentview />
        </main>
      </body>
    </>
  );
}

export default App;
