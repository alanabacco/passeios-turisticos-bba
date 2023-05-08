import Head from "@/utils/Head";
import Link from "next/link";

export default function Pagina404() {
  return (
    <>
      <Head title="404 | Passeios Turísticos de Borborema" />

      <h1>404 - A página que você procura não foi encontrada</h1>
      <Link href="/">Voltar à Página Inicial</Link>
    </>
  );
}
