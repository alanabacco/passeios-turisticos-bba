import NextHead from "next/head";

type HeadProps = {
  title?: string;
};

export default function Head({
  title = "Passeios Turísticos de Borborema",
}: HeadProps): JSX.Element {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}
