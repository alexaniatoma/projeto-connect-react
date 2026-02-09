import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import S from './usuario.module.scss'

export default function Usuario() {
  return (
    <main className={S.main}>
      <section>
        <img src="https://avatars.githubusercontent.com/u/86957848?v=4"></img>
        <div className={S.divInfo}>
          <h1>Alexania Toma</h1>
          <h2>Voluntário Ativo</h2>
          <p>Apaixonada por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas opurtunidades para ajudar</p>
          <ul>
            <li><CiLocationOn />São Paulo</li>
            <li><MdOutlineMail />alexaniatoma@hotmail.com</li>
            <li><CiCalendarDate />Membro desde 2026</li>
          </ul>
          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistencia Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>        
    </main>
  )
}
