"use client";

import { useEffect } from "react";
import Link from "next/link";

interface Integrante {
  nome: string;
  rm: string;
  foto: string;
  linkedin: string;
}

const integrantes: Integrante[] = [
  {
    nome: "Enzo Elia Tarraga",
    rm: "RM560901",
    foto: "/imagens/foto-enzo.jpg",
    linkedin: "https://www.linkedin.com/in/enzotarraga/",
  },
  {
    nome: "Rafael Terra Teodoro",
    rm: "RM560955",
    foto: "/imagens/foto-rafael.jpg",
    linkedin: "https://www.linkedin.com/in/rafael-terra-962289331/",
  },
  {
    nome: "Otoniel Arantes Barbado",
    rm: "RM560112",
    foto: "/imagens/foto-otoniel.jpg",
    linkedin: "https://www.linkedin.com/in/otoniel-barbado-7952b9329/",
  },
];

export default function IntegrantesPage() {
  useEffect(() => {
    const carregarIdioma = () => {
      const lang = localStorage.getItem("idiomaSelecionado") || "pt";
      console.log("Idioma carregado:", lang);
    };

    carregarIdioma();
    window.addEventListener("idiomaAtualizado", carregarIdioma);
    return () => window.removeEventListener("idiomaAtualizado", carregarIdioma);
  }, []);

  return (
    <div>
      <h1 className="titulo">Conheça os Integrantes do Projeto</h1>

      <div className="integrantes-container">
        {integrantes.map((int, index) => (
          <div key={index} className="card">
            <img src={int.foto} alt={int.nome} />
            <h2>{int.nome}</h2>
            <p>{int.rm}</p>
            <div>
              <a href={int.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="entrar-container">
        <Link href="/login" className="entrar-btn">
          Entrar no Site
        </Link>
      </div>
    </div>
  );
}
