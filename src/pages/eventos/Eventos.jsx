import React from 'react'
import InfoCard from '../../components/infoCard/infoCard'
import EmpoderandoJovens from '../../assets/img/empoderandoJovensFuturo.png'
import TecnologiaTransforma from '../../assets/img/tecnologiaTransforma.png'
import CarreiraPrimeiroEmprego from '../../assets/img/carreiraPrimeiroEmprego.png'

export default function Eventos() {
  return (
     <main>
                <h1>Eventos e Palestras</h1>
                <section>
                  <article>
                    <InfoCard
                    img = {EmpoderandoJovens}
                    alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
                    subtitulo = "Empoderando Jovens para o Futuro"
                    paragrafo = "Atividade: Palestra motivacional sobre liderança jovem e transformação social. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
                    textBotao = "Quero participar"
                    />        
                  </article>
                  <article>
                    <InfoCard
                    img = {TecnologiaTransforma}
                    alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
                    subtitulo = "Tecnologia que Transforma"
                    paragrafo = "Atividade: Workshop de introdução à programação e inovação digital.  Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
                    textBotao = "Quero participar"
                    />        
                  </article>
                  <article>
                    <InfoCard
                    img = {CarreiraPrimeiroEmprego}
                    alt="Imagem de tres pessoas carregando caixas com materiais para reciclagem"            
                    subtitulo = "Carreira e Primeiro Emprego"
                    paragrafo = "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
                    textBotao = "Quero participar"
                    />        
                  </article>
                </section>      
            </main>
   
  )
}
