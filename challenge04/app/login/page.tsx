"use client";

import Image from "next/image";
import Link from "next/link";
import "../login/styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/api/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(email, senha);
    if (res.success) {
      router.push("/historico-alertas");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="container">
      <div className="login-logo">
        <Image src="/imagens/logo-ccr1.png" alt="Logo CCR" width={200} height={30} />
      </div>

      <section className="login">
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

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

          <div className="entrar">
            <button type="submit">Entrar</button>
          </div>

          <div className="cadastro">
            <span>Não tem uma conta?</span>
            <Link href="/cadastro">Cadastre-se</Link>
          </div>
        </form>
      </section>
    </div>
  );
}
