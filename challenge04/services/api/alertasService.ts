type Alerta = {
  id: number;
  plataforma: string;
  data: string;
  mensagem: string;
};

let alertas: Alerta[] = [
  { id: 1, plataforma: "Plataforma 2", data: "2024-03-14", mensagem: "Pessoa detectada além da linha de segurança" },
  { id: 2, plataforma: "Plataforma 1", data: "2024-03-15", mensagem: "Pessoa detectada além da linha de segurança" },
];

export async function getAlertas() {
  return alertas;
}

export async function addAlerta(plataforma: string, data: string, mensagem: string) {
  const novo = { id: alertas.length + 1, plataforma, data, mensagem };
  alertas.push(novo);
  return novo;
}
