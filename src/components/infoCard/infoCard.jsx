import React from 'react'
import S from './infoCard.module.scss'
import Swal from 'sweetalert2'

export default function InfoCard(props) {

  const mostrarAlerta = () => {
    const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: "Sucesso!"
});

  }
  return (
    <article className={S.article}>
        <img src={props.img}alt={props.alt}/>
        <h2>{props.subtitulo}</h2>
        <p>{props.paragrafo}</p>
        <button onClick={mostrarAlerta}>{props.textBotao}</button>      
    </article>
  )
}
