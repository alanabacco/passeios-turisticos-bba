// localStorage - guarda pra sempre (ou até expirar)
// sessionStorage - apaga o token quando fecha a sessão
// pra server side rendering - o ideal é ser feito via cookie / lib nookies

import nookies from "nookies";
const ACCESS_TOKEN_KEY = "ATK";
const noveHoras = 60 * 60 * 9;

export const tokenService = {
  save(accessToken: string, context: any = null) {
    // globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    nookies.set(context, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: noveHoras,
      path: "/",
      sameSite: "strict",
    });
  },
  get(context: any = null) {
    // return sessionStorage.getItem(ACCESS_TOKEN_KEY);
    const cookies = nookies.get(context);
    return cookies[ACCESS_TOKEN_KEY] || "";
  },
  delete(context: any = null) {
    // globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
    nookies.destroy(context, ACCESS_TOKEN_KEY);
  },
};
