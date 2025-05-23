export async function login(email: string, senha: string) {
  // Fictício
  if (email === "admin@admin.com" && senha === "123456") {
    return { success: true, message: "Login realizado!" };
  }
  return { success: false, message: "Credenciais inválidas." };
}

export async function cadastrar(nome: string, email: string, senha: string) {
  // Fictício
  return { success: true, message: `Usuário ${nome} cadastrado com sucesso!` };
}
