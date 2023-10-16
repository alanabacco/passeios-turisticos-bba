// export function mascararTelefone(e: React.KeyboardEvent<HTMLInputElement>) {
//   const input = e.target as HTMLInputElement;
//   input.value = mascararNumero(input.value);
// }

export function mascararTelefone(value: string): string {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}
