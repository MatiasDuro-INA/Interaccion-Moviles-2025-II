window.onload = () => {
    let abrir = document.getElementById("abrir")
    let contenedor_modal = document.getElementById("contenedor_modal")
    let cerrar = document.getElementById("cerrar")
    let nombre = document.getElementById("nombre").value
    let modal = document.getElementById("modal")
    

    let parrafo = document.createElement("p")
    parrafo.innerHTML =`${nombre} te has inscripto en`

    modal.appendChild(parrafo)

    abrir.addEventListener("click", (e)=>{
        e.preventDefault()
        contenedor_modal.classList.add("show")
    })
       cerrar.addEventListener("click", ()=>{
        contenedor_modal.classList.remove("show")
        setTimeout(() => {
            window.location.href="index.html"
        }, 500);
    })
}