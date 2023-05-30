import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/anitta.png.jpeg'; 
import styled from 'styled-components';

const Container = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #EBECEE;
  padding: 20px;
`;

const NovosLivrosContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ImagemLivro = styled.img`
  max-width: 400px; /* Define a largura máxima da imagem */
  max-height: 400px; /* Define a altura máxima da imagem */
  width: auto; /* Mantém a proporção da imagem */
`;

function UltimosLancamentos() {
  return (
    <Container>
      <Content>
        <Titulo
          cor="#EB9B00"
          tamanhoFonte="36px"
        >
          ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
          {livros.map(livro => (
            <ImagemLivro src={livro.src} alt={livro.nome} />
          ))}
        </NovosLivrosContainer>
      </Content>
      <Footer>
        <CardRecomenda
          titulo="Talvez você se interesse por"
          subtitulo="Anitta"
          descricao="Reggaeton lançado por Anitta em novembro de 2021, Envolver alcançou nesta sexta-feira (25) o 1º lugar no ranking das mais ouvidas do mundo, segundo a plataforma de música Spotify."
          img={imagemLivro}
        />
      </Footer>
    </Container>
  );
}

export default UltimosLancamentos;
