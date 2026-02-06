import React from 'react'
import S from './doacao.module.scss'
import InfoCard from '../../components/infoCard/infoCard'
import InstitutoFamilia from "../../assets/img/institutoFamilia.png"
import FuturoEscola from '../../assets/img/futuroEscola..png'
import ConectaJovem from '../../assets/img/conectaJovem..png'

export default function Doacao() {
  return (
    <main className={S.main}>
        <h1>Doação</h1>
        <section className={S.cards}>
          <article>
            <InfoCard
            img = {InstitutoFamilia}
            alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
            subtitulo = "Instituto grande família"
            paragrafo = "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textBotao = "Quero Doar"
            />        
          </article>
          <article>
            <InfoCard
            img = {FuturoEscola}
            alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
            subtitulo = "Projeto Futuro na Escola"
            paragrafo = "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            textBotao = "Quero Doar"
            />        
          </article>
          <article>
            <InfoCard
            img = {ConectaJovem}
            alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
            subtitulo = "Instituto Conecta Jovem"
            paragrafo = "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            textBotao = "Quero Doar"
            />        
          </article>
        </section>      
    </main>
  )
}
