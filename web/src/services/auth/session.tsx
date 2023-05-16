import { useEffect, useState } from "react";
import { authService } from "./authService";
import { useRouter } from "next/router";
import { NextComponentType } from "next";

// Decorator Pattern
// a nível de servidor
export function withSession(funcao: any) {
  return async (context: any) => {
    try {
      const session = await authService.getSession(context);
      const contextoModificado = {
        ...context,
        req: {
          ...context.req,
          session,
        },
      };
      return funcao(contextoModificado);
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: "/login/?error=401",
        },
      };
    }
  };
}

// para páginas estáticas
export function useSession() {
  const [session, setSession]: any = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getSession()
      .then((sessaoDoUsuario) => {
        setSession(sessaoDoUsuario);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: session,
    error,
    loading,
  };
}

// Decorator Pattern
// High Order Component
export function withSessionHOC(Component: NextComponentType) {
  return function Wrapper(props: any) {
    const router = useRouter();
    const session = useSession();

    if (!session.loading && session.error) {
      router.push("/login/?error=401");
    }

    const contextoModificado = {
      ...props,
      session: session.data?.session,
    };
    return <Component {...contextoModificado} />;
  };
}

// Exemplo se for usar apenas o useSession() em um componente

// const router = useRouter();
// const session = useSession();
// console.log("session", session);

// if (!session.loading && session.error) {
//   router.push("/?error=401");
// }
