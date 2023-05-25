import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import style from "./styles.module.css";

type Props = {
  href?: string;
};

export default function BotaoVoltar({ href }: Props): JSX.Element {
  const router = useRouter();

  function handleOnClick() {
    if (href === undefined) {
      router.back();
    } else {
      router.push(href);
    }
  }

  return (
    <>
      <a className={style.link} onClick={handleOnClick}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={style.icon} />
        Voltar
      </a>
    </>
  );
}
