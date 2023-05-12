import { HttpClient } from "src/infra/HttpClient";
import { tokenService } from "./tokenService";

type Props = {
  nome: string;
  senha: string;
};

export const authService = {
  async login({ nome, senha }: Props) {
    // TODO: process.env.API_URL
    return HttpClient("http://localhost:8080/auth/login", {
      method: "POST",
      body: { nome, senha },
    }).then(async (res: any) => {
      if (!res.ok) throw new Error("Usuário ou senha inválidos.");

      const body = res.body;

      tokenService.save(body.accessToken);
    });
  },

  async getSession(context: any = null) {
    const token = tokenService.get(context);

    return HttpClient("http://localhost:8080/auth/session", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Não autorizado.");

      return res.body.dados;
    });
  },
};
