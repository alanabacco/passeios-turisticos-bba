import NextHead from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
  faviconImg?: string;
};

export default function Head({
  title = "Passeios Turísticos de Borborema",
  description = "",
  faviconImg = "/favicon.ico",
}: HeadProps): JSX.Element {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={faviconImg} />
    </NextHead>
  );
}
