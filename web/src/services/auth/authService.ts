import { HttpClient } from "src/infra/HttpClient";
import { tokenService } from "./tokenService";

type AuthServiceProps = { nome: string; senha: string };
type ResponseProps = { ok: boolean; status: number; statusText: string; body: any };

export const authService = {
  async login({ nome, senha }: AuthServiceProps) {
    return HttpClient(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      body: { nome, senha },
    }).then(async (res: ResponseProps) => {
      if (!res.ok) throw new Error("Usuário ou senha inválidos.");
      const body = res.body;
      tokenService.save(body.accessToken);
    });
  },

  async getSession(context: any = null) {
    const token = tokenService.get(context);

    return HttpClient(`${process.env.NEXT_PUBLIC_API_URL}/auth/session`, {
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
