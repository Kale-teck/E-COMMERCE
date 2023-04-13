const valores = document.querySelectorAll("input")

valores.forEach((evento) => {
   
   evento.addEventListener("type", () => {
      console.log("oi")
   })

})