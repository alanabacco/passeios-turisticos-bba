import Link from "next/link";

export default function Pagina404() {
  return (
    <>
      <h1>404 - A página que você procura não foi encontrada</h1>
      <Link href="/">Voltar à Página Inicial</Link>
    </>
  );
}
