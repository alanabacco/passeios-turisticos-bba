import { useRouter } from "next/router";
import { useEffect } from "react";
import { tokenService } from "src/services/auth/tokenService";
import Head from "src/infra/Head";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    tokenService.delete();
    router.push("/");
  }, []);

  return (
    <>
      <Head title="Logout | Passeios Turísticos de Borborema" />
      <p>Você será redirecionado em instantes...</p>
    </>
  );
}
