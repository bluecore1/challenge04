"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

type Alert = {
  id: number;
  platform: string;
  date: string;
  message: string;
};

export default function AlertPage() {
  const router = useRouter();

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      platform: "Plataforma 2",
      date: "2024-03-14",
      message: "Pessoa detectada além da linha de segurança",
    },
    {
      id: 2,
      platform: "Plataforma 1",
      date: "2024-03-15",
      message: "Pessoa detectada além da linha de segurança",
    },
  ]);

  const [selectedPlatform, setSelectedPlatform] = useState("Todos");
  const [selectedDate, setSelectedDate] = useState("");

  const [newDate, setNewDate] = useState("");
  const [newPlatform, setNewPlatform] = useState("");
  const [newMessage, setNewMessage] = useState("Pessoa além da linha amarela");

  const handleLogout = () => {
    router.push("/");
  };

  const filteredAlerts = alerts.filter(
    (alert) =>
      (selectedPlatform === "Todos" || alert.platform === selectedPlatform) &&
      (selectedDate === "" || alert.date === selectedDate)
  );

  const handleAddAlert = () => {
    if (!newDate || !newPlatform || !newMessage) {
      alert("Preencha todos os campos para registrar um alerta!");
      return;
    }

    const newAlert: Alert = {
      id: alerts.length + 1,
      platform: newPlatform,
      date: newDate,
      message: newMessage,
    };

    setAlerts([...alerts, newAlert]);

    setNewDate("");
    setNewPlatform("");
    setNewMessage("Pessoa além da linha amarela");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* HEADER */}
      <header className="header">
        <div className="login-logo">
          <Image
            src="/imagens/Logo-CCR.PNG"
            alt="Logo CCR"
            width={200}
            height={30}
          />
        </div>
        <nav>
          <button className="botao1">
            <a href="#" className="hover:underline">
              Históricos de Alertas
            </a>
          </button>
          <button className="botao2">
            <a href="monitoramento" className="hover:underline">
              Monitoramento em Tempo Real
            </a>
          </button>
        </nav>
        <div>
          <button id="sair-button" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="container-alertas">
        {/* FILTRO */}
        <section>
          <h2>Filtrar Alertas</h2>
          <div className="filtro">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="Todos">Todos</option>
              <option value="Plataforma 1">Plataforma 1</option>
              <option value="Plataforma 2">Plataforma 2</option>
            </select>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </section>

        {/* LISTA DE ALERTAS */}
        <section>
          <h2>Alertas</h2>
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <div key={alert.id} className="alert">
                <p>
                  <strong>{alert.platform}</strong> - {alert.date}
                </p>
                <p>{alert.message}</p>
              </div>
            ))
          ) : (
            <p>Nenhum alerta encontrado.</p>
          )}
        </section>

        <section className="novo-alerta">
          <h2>Registrar Novo Alerta</h2>
          <div className="filtro">
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Local (ex.: Plataforma 2)"
              value={newPlatform}
              onChange={(e) => setNewPlatform(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleAddAlert}>Registrar Alerta</button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="redes-sociais">
          <a
            href="https://www.linkedin.com/company/ccr-rodovias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icones/linkedin.svg"
              alt="LinkedIn"
              className="icone-social"
            />
            LinkedIn
          </a>
          <a
            href="https://x.com/_Linhas8e9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icones/twitter.svg"
              alt="Twitter"
              className="icone-social"
            />
            Twitter
          </a>
          <a
            href="https://www.instagram.com/viamobilidadesp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icones/instagram.svg"
              alt="Instagram"
              className="icone-social"
            />
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
