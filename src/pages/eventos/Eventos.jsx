import React from 'react'
import InfoCard from '../../components/infoCard/infoCard'
import EmpoderandoJovens from '../../assets/img/empoderandoJovensFuturo.png'
import TecnologiaTransforma from '../../assets/img/tecnologiaTransforma.png'
import CarreiraPrimeiroEmprego from '../../assets/img/carreiraPrimeiroEmprego.png'
import S from '../../Style.module.scss'

export default function Eventos() {
  return (
     <main className={S.main}>
      <h1>Eventos e Palestras</h1>
        <section className={S.cards}>
          <article>
            <InfoCard
              img = {EmpoderandoJovens}
              alt="Imagem de jovens participando de uma palestra."            
              subtitulo = "Empoderando Jovens para o Futuro"
              paragrafo = "Atividade: Palestra motivacional sobre liderança jovem e transformação social. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
              textBotao = "Quero participar"
                    />        
                  </article>
                  <article>
                    <InfoCard
                    img = {TecnologiaTransforma}
                    alt="Imagem de pessoas estudando programação em uma sala de reunião."         
                    subtitulo = "Tecnologia que Transforma"
                    paragrafo = "Atividade: Workshop de introdução à programação e inovação digital. Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
                    textBotao = "Quero participar"
                    />        
                  </article>
                  <article>
                    <InfoCard
                    img = {CarreiraPrimeiroEmprego}
                    alt="Imagem de tres pessoas carregando conversando em uma reunião."            
                    subtitulo = "Carreira e Primeiro Emprego"
                    paragrafo = "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
                    textBotao = "Quero participar"
                    />        
                  </article>
                </section>      
            </main>   
  )
}
