import React from 'react'
import InfoCard from '../../components/infoCard/infoCard'
import MultiraoReciclagem from '../../assets/img/mutiraoReciclagem.png'
import AulasTecnologias from '../../assets/img/aulasTecnologia.png'
import EsporteInclusao from '../../assets/img/esporteInclusao.png'
import S from "../../Style.module.scss";


export default function Voluntariado() {
  return (
     <main className={S.main}>
            <h1>Voluntariado</h1>
            <section className={S.cards}>
              <article>
                <InfoCard
                img = {MultiraoReciclagem}
                alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
                subtitulo = "Multirão de reciclagem"
                paragrafo = "Coletar materiais recicláveis e orientar sobre descarte consciente."
                textBotao = "Quero participar"
                />        
              </article>
              <article>
                <InfoCard
                img = {AulasTecnologias}
                alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
                subtitulo = "Aulas de Tecnologia"
                paragrafo = "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
                textBotao = "Quero participar"
                />        
              </article>
              <article>
                <InfoCard
                img = {EsporteInclusao}
                alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
                subtitulo = "Esporte e Inclusão"
                paragrafo = "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
                textBotao = "Quero participar"
                />        
              </article>
            </section>      
        </main>
  )
}
