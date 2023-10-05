import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import style from "./styles.module.css";
import Link from "next/link";

type Props = {
  href: string;
};

export default function BotaoVoltar({ href = "/"}: Props): JSX.Element {
  return (
    <Link href={href} className={style.link}>
      <FontAwesomeIcon icon={faArrowLeftLong} className={style.icon} />
      <p>Voltar</p>
    </Link>
  );
}
