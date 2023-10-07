import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment-timezone";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function Calendario() {
  moment.tz.setDefault("America/Sao_Paulo");
  const localizer = momentLocalizer(moment);

  const [feriados, setFeriados] = useState<any[]>([]);
  const [listaEventos, setListaEventos] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchFeriados = async () => {
      try {
        const promises = [
          fetch(`https://brasilapi.com.br/api/feriados/v1/${moment().year()}`).then(
            (response) => response.json()
          ),
          fetch(`https://brasilapi.com.br/api/feriados/v1/${moment().year() + 1}`).then(
            (response) => response.json()
          ),
          fetch(`https://brasilapi.com.br/api/feriados/v1/${moment().year() + 2}`).then(
            (response) => response.json()
          ),
        ];

        const dataArray = await Promise.all(promises);
        const combinedFeriados = [...dataArray[0], ...dataArray[1], ...dataArray[2]];
        setFeriados(combinedFeriados);
      } catch (error) {
        setError(error);
      }
    };

    const fetchEventos = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/eventos`);
        const data = await res.json();
        setListaEventos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeriados();
    fetchEventos();
  }, []);

  // tradução do calendário
  const messages = {
    "pt-br": {
      date: "Data",
      time: "Horário",
      event: "Evento",
      allDay: "-",
      week: "Semana",
      work_week: "Dia de trabalho",
      day: "Dia",
      month: "Mês",
      previous: "Anterior",
      next: "Próximo",
      yesterday: "Ontem",
      tomorrow: "Amanhã",
      today: "Hoje",
      noEventsInRange: "Não há eventos neste intervalo.",
      showMore: (total: any) => `+${total} mais`,
    },
  };

  const novaListaEventos = listaEventos.map((evento) => {
    const dataInicio = new Date(evento.data_inicio);
    dataInicio.setHours(dataInicio.getHours() + 3);
    const dataFim = new Date(evento.data_fim);
    dataFim.setHours(dataFim.getHours() + 3);
    return {
      nome: evento.nome,
      data_inicio: dataInicio,
      data_fim: dataFim,
    };
  });

  const novaListaFeriados = feriados.map((feriado) => {
    const data = new Date(feriado["date"]);
    data.setHours(data.getHours() + 3);
    return {
      nome: feriado["name"],
      data_inicio: data,
      data_fim: data,
    };
  });

  const todosEventos = [...novaListaFeriados, ...novaListaEventos];
  console.log("Lista de eventos:", todosEventos);

  if (error) {
    console.log("Error", error.message);
    return <div>Erro: houve um erro ao carregar o calendário</div>;
  }

  if (loading) {
    return <div>Carregando calendário...</div>;
  } else {
    return (
      <div className={styles.calendarioContainer}>
        <Calendar
          culture="pt-br"
          messages={messages["pt-br"]}
          defaultDate={moment().toDate()}
          localizer={localizer}
          events={todosEventos}
          titleAccessor={"nome"}
          startAccessor={"data_inicio"}
          endAccessor={"data_fim"}
          popup
          views={["month"]}
          eventPropGetter={() => ({ style: { backgroundColor: "#B00000" } })}
          tooltipAccessor={"nome"}
        />
      </div>
    );
  }
}