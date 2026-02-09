import React from "react";
import InfoCard from "../../components/infoCard/infoCard";
import MentoriaCarreiraEmprego from "../../assets/img/mentoriaCarreiraEmprego.png";
import CompartilheExperiencia from "../../assets/img/compartilheExperiencia.png";
import Acompanhamento from "../../assets/img/acompanhamento.png";
import S from "../../Style.module.scss";

export default function Mentoria() {
  return (
    <main className={S.main}>
      <h1>
        Mentoria
      </h1>
      <section className={S.cards}>
        <article>
          <InfoCard
            img={
              MentoriaCarreiraEmprego
            }
            alt="Imagem de pessoas convesando sobre carreira e emprego"
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={
              CompartilheExperiencia
            }
            alt="Imagem de pessoas trabalhando juntas em um projeto, compartilhando conhecimento e experiencia."
            subtitulo="Compartilhe Experiência"
            paragrafo="Oriente jovens e profissionais iniciantes em sua área."
            textBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={
              Acompanhamento
            }
            alt="Imagem de duas pessoas conversando."
            subtitulo="Acompanhamento"
            paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
            textBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
