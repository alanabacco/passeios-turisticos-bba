import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import style from "./styles.module.css";

export default function BotaoVoltar(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <a className={style.link} onClick={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={style.icon} />
        Voltar
      </a>
    </>
  );
}
