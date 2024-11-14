'use client';

import { useState, useEffect } from "react";
import './globals.css';
import styles from "../styles/Home.module.css";

// Função para gerar o tabuleiro
const gerarTabuleiro = () => {
  const tipos = ["arvore", "pedra", "capim", "barro", "objetivo"];
  const tabuleiro = [];
  
  for (let y = 0; y < 50; y++) {
    const linha = [];
    for (let x = 0; x < 50; x++) {
      let tipo = tipos[Math.floor(Math.random() * tipos.length)];
      
      if (tipo === "objetivo" && linha.includes("objetivo")) {
        tipo = "capim";
      }
      
      linha.push(tipo);
    }
    tabuleiro.push(linha);
  }
  return tabuleiro;
};

export default function Home() {
  const [passos, setPassos] = useState(0);
  const [tabuleiro, setTabuleiro] = useState([]);

  useEffect(() => {
    const novoTabuleiro = gerarTabuleiro();
    setTabuleiro(novoTabuleiro);

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          setPassos((prevPassos) => prevPassos + 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Tabuleiro</h1>
      <h3>Quantidade de passos: {passos}</h3>

      <div className={styles.tabuleiro}>
        {tabuleiro.map((linha, rowIndex) => (
          <div key={rowIndex} className={styles.linha}>
            {linha.map((celula, colIndex) => (
              <div
                key={colIndex}
                className={`${styles.celula} ${styles[celula]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
