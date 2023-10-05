import { render, screen } from "@testing-library/react";
import Footer from "src/pages/components/Footer";

const versao = "Versão 2.0";
const textoPrincipal = {
  texto: "Trilhas e Passeios Turísticos de Borborema",
  href: "/",
};
const painelAdministrativo = {
  texto: "Painel Administrativo",
  href: "/painel-administrativo",
};
const siteMunicipio = {
  texto: "Site oficial do município de Borborema",
  href: "https://www.borborema.sp.gov.br",
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

  test("deve renderizar o link para o site do municipio", () => {
    const link = screen.getByText(siteMunicipio.texto);
    expect(link).toBeVisible();
  });

  test("link para o site do municipio deve ter o atributo href correto", () => {
    const link = screen.getByText(siteMunicipio.texto);
    expect(link).toHaveAttribute("href", siteMunicipio.href);
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
