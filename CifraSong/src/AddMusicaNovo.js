import "./componentes/css/variables.css"
import "./componentes/css/elements.css"
import "./componentes/css/classes.css"
import "./componentes/css/menu.css"
import "./componentes/css/styles.css"

function AddMusica() {
    return(<>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Página Inicial</title>
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
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        {/*INÍCIO MENU SUPERIOR */}
        <aside className="menu white-bg">
            <div className="main-content menu-content">
                <h1 onclick="getElementById('close-menu').checked = false;">
                <a href="#home">SongZ</a>
                </h1>
                <nav>
                <ul onclick="getElementById('close-menu').checked = false;">
                    <li>
                    <a href="./PaginaLogin.html">Home</a>
                    </li>
                    <li>
                    <a href="./PaginaLogin.html">Login</a>
                    </li>
                    <li>
                    <a href="">Letras</a>
                    </li>
                </ul>
                </nav>
            </div>
        </aside>
        {/*FIM DO MENU SUPERIOR */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container mt-5">
          <div className="row justify-content-between">
            <form className="col-sm-6">
              <div className="mb-3">
                <h3>Envie sua letra</h3>
                <div className="row mt-4">
                  <div className="col-sm-2">
                    <label htmlFor="exampleInputEmail1" className="form-l abel mt-2">
                      Título
                    </label>
                  </div>
                  <div className="col-sm-7">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row mt-4">
                  <div className="col-sm-2">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-2">
                      Artista
                    </label>
                  </div>
                  <div className="col-sm-7">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3 pb-4 border-bottom">
                <div className="row mt-4">
                  <div className="col-sm-2">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-2">
                      Compositores
                    </label>
                  </div>
                  <div className="col-sm-7">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby=""
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-sm-2">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Versos
                    </label>
                  </div>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary">
                    Adicionar
                  </button>
                </div>
              </div>
            </form>
            {/*-------------------------------------------------------------------------------*/}
            <form className="col-sm-4">
              <div className="mb-5">
                <h3>Preview</h3>
              </div>
              <div className="mb-1">
                <div className="row justify-content-end">
                  <div className="col-sm-3">
                    <button type="submit" className="btn text-info">
                      Editar
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-sm-12">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={20}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-sm-3">
                    <button type="submit" className="btn btn-primary">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
      
    );
}

export default AddMusica