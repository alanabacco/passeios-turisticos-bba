import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardSection from "src/components/CardSection";

const mockEventos = [
  {
    id: "1",
    nome: "Evento Fictício 1",
    descricao: "Description 1",
    endereco: "Rua Fulano de Tal, 000",
    data_inicio: "2023-10-01",
    data_fim: "2023-10-05",
    createdAt: "2023-09-01",
    updatedAt: "2023-09-05",
    deletedAt: "",
  },
];

describe("Componente CardSection", () => {
  beforeEach(() => {
    render(<CardSection itens={mockEventos} />);
  });

  test("deve renderizar o nome do evento", () => {
    const item = screen.getByRole("heading", { name: mockEventos[0].nome });
    expect(item).toBeVisible();
  });

  test("deve renderizar a descrição do evento", () => {
    const item = screen.getByText(`Descrição: ${mockEventos[0].descricao}`);
    expect(item).toBeVisible();
  });

  test("deve renderizar o endereço do evento", () => {
    const item = screen.getByText(`Endereço: ${mockEventos[0].endereco}`);
    expect(item).toBeVisible();
  });

  test("deve renderizar a data de início", () => {
    const dataInicio = "01/10/2023";
    const item = screen.getByText(`Data de início: ${dataInicio}`);
    expect(item).toBeVisible();
  });

  test("deve renderizar a data de fim", () => {
    const dataFim = "05/10/2023";
    const item = screen.getByText(`Data de fim: ${dataFim}`);
    expect(item).toBeVisible();
  });

  // test.skip("handles keyboard navigation correctly", () => {
  //   const item = document.getElementsByClassName("item").item(0);
  //   userEvent.tab();
  //   expect(item).toHaveFocus();
  // });
});

describe("Component CardSection com linkIdParam", () => {
  beforeEach(() => {
    render(<CardSection itens={mockEventos} linkIdParam="/editar/eventos/" />);
  });
  test("deve renderizar link corretamente quando linkIdParam é passado", () => {
    const link = screen.getByText(mockEventos[0].nome).closest("a");
    expect(link).toHaveAttribute("href", `/editar/eventos/${mockEventos[0].id}`);
  });
});
