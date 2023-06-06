export type AtracaoTuristica = {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  telefone: string;
};

export type Evento = {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  data_inicio: string;
  data_fim: string;
};

export type GuiaTuristico = {
  id: number;
  nome: string;
  telefone: string;
  tipos_turismo: string;
};

export type Hospedagem = {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  telefone: string;
};

export type InformacaoUtil = {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  telefone: string;
};

export type Restaurante = {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  telefone: string;
};

export type Usuario = {
  id: number;
  nome: string;
};
