import { render, screen } from "@testing-library/react";
import Footer from "src/components/Footer";

const versao = "Versão 4.0";
const textoPrincipal = {
  texto: "Trilhas e Passeios Turísticos de Borborema",
  href: "/",
};
const painelAdministrativo = {
  texto: "Painel Administrativo",
  href: "/painel-administrativo",
};
const documentacaoAPI = {
  texto: "Documentação da API",
  href: "https://passeios-turisticos-bba-server.vercel.app/api-docs",
};
const paginaTurismo = {
  texto: "Página oficial do Turismo",
  href: "https://www.borborema.sp.gov.br/turismo",
};

describe("Componente Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("deve renderizar a versão do sistema corretamente", () => {
    const texto = screen.getByText(versao);
    expect(texto).toBeVisible();
  });

  test("deve renderizar o texto principal", () => {
    const link = screen.getByText(textoPrincipal.texto);
    expect(link).toBeVisible();
  });

  test("texto principal deve ter o atributo href correto", () => {
    const link = screen.getByText(textoPrincipal.texto);
    expect(link).toHaveAttribute("href", textoPrincipal.href);
  });

  test("deve renderizar o link para o painel administrativo", () => {
    const link = screen.getByText(painelAdministrativo.texto);
    expect(link).toBeVisible();
  });

  test("link para o painel administrativo deve ter o atributo href correto", () => {
    const link = screen.getByText(painelAdministrativo.texto);
    expect(link).toHaveAttribute("href", painelAdministrativo.href);
  });

  test("deve renderizar o link para a documentação da API", () => {
    const link = screen.getByText(documentacaoAPI.texto);
    expect(link).toBeVisible();
  });

  test("link para a documentação da api deve ter o atributo href correto", () => {
    const link = screen.getByText(documentacaoAPI.texto);
    expect(link).toHaveAttribute("href", documentacaoAPI.href);
  });

  test("deve renderizar o link para a página do turismo", () => {
    const link = screen.getByText(paginaTurismo.texto);
    expect(link).toBeVisible();
  });

  test("link para a página do turismo deve ter o atributo href correto", () => {
    const link = screen.getByText(paginaTurismo.texto);
    expect(link).toHaveAttribute("href", paginaTurismo.href);
  });

  test("deve ter ", () => {
    const link = screen.getByText(paginaTurismo.texto);
    expect(link).toHaveAttribute("href", paginaTurismo.href);
  });
});
