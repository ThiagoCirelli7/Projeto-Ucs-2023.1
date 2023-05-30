import React, { useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { livros } from './dadosPesquisa';


const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // Outros estilos do container...
`;

const Titulo = styled.h2`
    color: white; // Altera a cor do título para branco
    // Estilos adicionais do título...
`;

const Subtitulo = styled.h3`
    color: white; // Altera a cor do subtitulo para branco
    // Estilos adicionais do subtitulo...
`;

const Resultado = styled.div`
    // Estilos do resultado...
`;

const LetraMusica = styled.pre`
  color: white;
  text-align: center;
  overflow-y: auto;
  // Outros estilos que você desejar aplicar à letra da música...
`;

const Imagem = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const NomeLivro = styled.p`
  color: yellow; // Altera a cor do nome do livro para amarelo
  text-align: center;
  margin: 20px auto 0;
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo color="white">Já sabe por onde começar?</Titulo>
      <Subtitulo color="white">Encontre seu Artista</Subtitulo>
      <Input
        placeholder="Insira o nome do Artista"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
        style={{ color: 'yellow' }} // Altera a cor do input para amarelo
      />
      {livrosPesquisados.map((livro) => (
        <Resultado key={livro.id}>
          <Imagem src={livro.src} alt={livro.nome} />
          <NomeLivro>{livro.nome}</NomeLivro>
          <LetraMusica>{livro.letra}</LetraMusica>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
