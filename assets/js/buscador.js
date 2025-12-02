function initBuscador() {
    const buscador = document.getElementById("buscador");
    const tarjetas = document.querySelectorAll(".catalog-card");

    buscador.addEventListener("keyup", () => {
        const texto = buscador.value.toLowerCase();

        tarjetas.forEach(card => {
            const nombre = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = nombre.includes(texto) ? "flex" : "none";
        });
    });
}
