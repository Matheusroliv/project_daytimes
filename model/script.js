function carregar() {

  let msg = window.document.getElementById("msg")
  let img = window.document.getElementById("imagem")
  let data = new Date()
  let hora = data.getHours()
  msg.innerHTML = "Agora são "+ hora +" horas."

    if (hora >= 5 && hora < 18) {

        img.src = "/model/images/manha.png"
        document.body.style.background = "#e2cd9f"
    
    }else if (hora >= 14 && hora <= 18) {

        img.src = "/model/images/tarde.png"
        document.body.style.background = "#b9846f"

    } else {

         img.src = "/model/images/noite.png"
         document.body.style.background = "#515154"

    }

}

