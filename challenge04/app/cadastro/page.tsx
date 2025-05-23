"use client";

import Image from "next/image";
import Link from "next/link";
import "../login/styles.css";
import { useState } from "react";
import { cadastrar } from "@/services/api/authService";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    const res = await cadastrar(nome, email, senha);
    alert(res.message);
  };

  return (
    <div className="container">
      <div className="login-logo">
        <Image src="/imagens/logo-ccr1.png" alt="Logo CCR" width={200} height={30} />
      </div>

      <section className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="text-2xl font-bold text-center mb-4">Cadastre-se</h2>

          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
            required
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <button type="submit">Cadastrar</button>

          <div className="cadastro">
            <span>Já tem uma conta?</span>
            <Link href="/login">Login</Link>
          </div>
        </form>
      </section>
    </div>
  );
}
