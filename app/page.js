'use client';

import { useState, useEffect, useRef } from "react";
import './globals.css';
import styles from "../styles/Home.module.css";




const gerarTabuleiro = () => {
  const tipos = ["arvore", "pedra", "capim", "barro", "objetivo"];
  const tabuleiro = [];
  for (let y = 0; y < 50; y++) {
    const linha = [];
    for (let x = 0; x < 50; x++) {
      let tipo = tipos[Math.floor(Math.random() * 5)];
      if (tipo === "objetivo" && !linha.some(celula => celula === "objetivo")) {
        tipo = "objetivo";
      }
      linha.push(tipo);
    }
    tabuleiro.push(linha);
  }
  return tabuleiro;
};

const handleKeyDown = (e) => {
  switch (e.key) {
    case "ArrowUp":
      movimentarJogador(0, -1);
      break;
    case "ArrowDown":
      movimentarJogador(0, 1);
      break;
    case "ArrowLeft":
      movimentarJogador(-1, 0);
      break;
    case "ArrowRight":
      movimentarJogador(1, 0);
      break;
    default:
      break;
  }
};














export default function Home() {
  const [passos, setPassos] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Tabuleiro</h1>
      <h3>Quantidade de passos: {passos}</h3>

    </div>
  );
}
