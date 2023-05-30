import "./componentes/css/variables.css"
import "./componentes/css/elements.css"
import "./componentes/css/classes.css"
import "./componentes/css/menu.css"
import "./componentes/css/styles.css"
import kv from "./componentes/img/kevin.jpg"
import lsete from "./componentes/img/l77.jpg"
import veigh from "./componentes/img/veigh.png"
import kako from "./componentes/img/kako.jpg"
import bi from "./componentes/img/bi.jpg"
import post from "./componentes/img/post.jpg"
import hd from "./componentes/img/head.jpeg"

function Home() {
  return (<>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SongZ</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./componentes/css/variables.css" />
    <link rel="stylesheet" href="./componentes/css/elements.css" />
    <link rel="stylesheet" href="./componentes/css/classes.css" />
    <link rel="stylesheet" href="./componentes/css/menu.css" />
    <link rel="stylesheet" href="./componentes/css/styles.css" />
    <input
      id="close-menu"
      className="close-menu"
      type="checkbox"
      aria-label="Close menu"
      role="button"
    />
    <label className="close-menu-label" htmlFor="close-menu" title="close menu" />
    <aside className="menu white-bg">
      <div className="main-content menu-content">
        <h1 onclick="getElementById('close-menu').checked = false;">
          <a href="#home">SongZ</a>
        </h1>
        <nav>
          <ul onclick="getElementById('close-menu').checked = false;">
            <li>
              <a href="./PaginaLogin.html">Login</a>
            </li>
            <li>
              <a href="#grid-one">Dicas</a>
            </li>
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="./AddMusica.html">Coloque suas musicas</a>
            </li>
            <li>
              <a href="#pricing">Letras</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div className="menu-spacing" />
    <section id="home" className="intro main-bg section">
      <div className="main-content intro-content">
        <div className="intro-text-content">
          <h2>Poste sua musica, deixe ouvintes ouvir você!</h2>
          <p>
            SongZ, um site onde você consegue, posta suas linda e bela canção com
            seu direito autoral.
          </p>
        </div>
        <div className="intro-img">
          <img src= {hd} alt="Logo de HTML, CSS e JS." />
        </div>
      </div>
    </section>
    <section id="Login" className="white-bg section">
      <div className="main-content top3-content">
        <h2>VEM SER SONG, VEM VEM, VEM CANTAR</h2>
        <p>
          Ouvindo a música que você faz, eu consigo ouvir seu coração com as suas
          letras. Nunca perca essa delicadeza, amiga, porque ela te torna única!.
        </p>
      </div>
    </section>
    <section id="grid-one" className="grid-one main-bg section">
      <div className="main-content grid-one-content">
        <h2 className="grid-main-heading">Dicas</h2>
        <p className="grid-description">Uma breve descrição.</p>
        <div className="grid">
          <article>
            <h3>Dica 1</h3>
            <p>Poste sua musica com beats sem direito autoriais.</p>
          </article>
          <article>
            <h3>Dica 2</h3>
            <p>Seja Único, não copie, você consegue</p>
          </article>
          <article>
            <h3>Dica 3</h3>
            <p>
              Publique suas musicas para ouvintes e coloque a cifra dela para quem
              gosta de tocar um instrumento.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section id="gallery" className="grid-one white-bg section">
      <div className="main-content grid-one-content">
        <h2 className="grid-main-heading">Galeria de artista</h2>
        <p className="grid-description">Uma breve descrição.</p>
        <div className="grid">
          <div className="gallery-img">
            <img src= {kv} />
          </div>
          <div className="gallery-img">
            <img src= {lsete} />
          </div>
          <div className="gallery-img">
            <img src= {veigh} />
          </div>
          <div className="gallery-img">
            <img src= {kako} />
          </div>
          <div className="gallery-img">
            <img src= {bi} />
          </div>
          <div className="gallery-img">
            <img src= {post} />
          </div>
        </div>
      </div>
    </section>
    <section id="grid-two" className="grid-one main-bg section">
      <div className="main-content grid-one-content">
        <h2 className="grid-main-heading">Coloque suas Musicas</h2>
        <p className="grid-description">Uma breve descrição.</p>
        <div className="grid">
          <article>
            <h3>Dica 1</h3>
            <p>
              grave sua voz com o microfone do seu celular, ele tem uma boa
              qualidade.
            </p>
          </article>
          <article>
            <h3>Dica 2</h3>
            <p>suba seu audio em mp3</p>
          </article>
          <article>
            <h3>Dica 3</h3>
            <p>Suba suas cifras corretas para não ter erros</p>
          </article>
        </div>
      </div>
    </section>
    <section id="pricing" className="white-bg section">
      <div className="main-content top3-content">
        <h2>Letra e cifras</h2>
        <p>Assim que irá ficar sua cifra</p>
        <p>
          Oi balde Desculpa a cara de pau, mas deu saudade Eu te chutei quando a
          raiva 'tava no auge Eu fui um trouxa, a gente sabe Que nunca foi falta
          de amor
        </p>
        <div className="responsive-table">
          <table>
            <caption>aqui ficará as cifras</caption>
            <thead>
              <tr>
                <th>Oi balde, desculpa a cara de pau</th>
                <th>Mas deu saudade</th>
                <th>Eu te chutei quando a raiva tava no auge</th>
                <th>Eu fui um trouxa a gente sabe</th>
                <th>Que nunca foi falta de amor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>D</td>
                <td>A</td>
                <td>Em</td>
                <td>G</td>
                <td>Gm</td>
              </tr>
              <tr>
                <td>D</td>
                <td>A</td>
                <td>Em7</td>
                <td>G</td>
                <td>Gm</td>
              </tr>
              <tr></tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Oi Balde - Zé Neto e Cristiano</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
    <section id="contact" className="intro main-bg section">
      <div className="main-content intro-content">
        <div className="intro-text-content">
          <h2>SONGZ</h2>
        </div>
        <div className="intro-img">
          <img src="./componentes/img/songg.svg" alt="Logo de HTML, CSS e JS." />
        </div>
        <div className="contact-form">
          <fieldset className="form-grid">
            <legend>Entre em contato</legend>
            <div className="form-group">
              <label htmlFor="first-name">Primeiro Nome</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Ultimo nome</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Your last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your e-mail"
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">deixe sua duvida</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Your message"
                defaultValue={""}
              />
            </div>
            <div className="form-group full-width">
              <button type="submit">Enviar</button>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
    <footer id="footer" className="footer white-bg">
      <p>
        <a rel="nofollow" target="_blank" href="">
          Projeto 2023 <span className="" /> USJT
        </a>
      </p>
    </footer>
    <a className="back-to-top" href="#">
      ➤
    </a>
  </>
  
  );
}

export default Home
