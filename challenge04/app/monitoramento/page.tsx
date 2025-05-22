"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../monitoramento/styles.css";

export default function MonitoramentoPage() {
  const [plataforma, setPlataforma] = useState("Plataforma 1");
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="login-logo">
          <div className="login-logo-img">
            <Image src="/imagens/logo-CCR.png" alt="Logo" width={200} height={30} />
          </div>
        </div>
        <nav>
          <button className="bg-gray-700 px-3 py-1 rounded">
            <a href="/historico-alertas" className="hover:underline">Históricos de Alertas</a>
          </button>
          <button className="bg-gray-700 px-3 py-1 rounded">
            <a href="/monitoramento" className="hover:underline">Monitoramento em Tempo Real</a>
          </button>
        </nav>
        <div>
          <button
            id="sair1-button"
            className="bg-gray-700 px-3 py-1 rounded"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="flex-grow pt-24 p-6 text-center">
        <h2 className="text-2xl font-bold">Monitoramento em Tempo Real</h2>
        <div className="flex justify-center">
          {["Plataforma 1", "Plataforma 2", "Plataforma 3"].map((p) => (
            <button
              key={p}
              className={`bg-blue-500 text-white px-4 py-2 ${plataforma === p ? "bg-gray-800" : ""
                }`}
              onClick={() => setPlataforma(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Câmera - {plataforma}</h3>
          <div className="video-container">
            <div className="bg-black w-full max-w-2xl h-64 mx-auto flex items-center justify-center text-white text-sm rounded-lg shadow-lg border-4 border-gray-800">
              Vídeo ao vivo da {plataforma}
            </div>
          </div>
        </div>
      </main>

      <footer>

        <div className="redes-sociais">
          <a href="https://www.linkedin.com/company/ccr-rodovias/" target="_blank" rel="noopener noreferrer">
            <img src="/icones/linkedin.svg" alt="LinkedIn" className="icone-social" />
            LinkedIn
          </a>
          <a href="https://x.com/_Linhas8e9" target="_blank" rel="noopener noreferrer">
            <img src="/icones/twitter.svg" alt="Twitter" className="icone-social" />
            Twitter
          </a>
          <a href="https://www.instagram.com/viamobilidadesp/" target="_blank" rel="noopener noreferrer">
            <img src="/icones/instagram.svg" alt="Instagram" className="icone-social" />
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
