const express = require('express');
const { request } = require('https');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/add-lyrics', async (req, res) => {
  const { artist, song, lyrics } = req.body;
  const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    const updatedLyrics = data.lyrics + lyrics;
    res.json({ lyrics: updatedLyrics });
  } else {
    res.json({ lyrics: 'Lyrics not found' });
}
  const data = await response.json();
  const updatedLyrics = data.lyrics + lyrics;
  res.json({ lyrics: updatedLyrics });
});

app.listen(3000, () => {
  console.log(`Servidor executando na porta 3000`);
});
 index.js