const themeToggleBtn=document.getElementById("theme-toggle");
const body=document.body;

themeToggleBtn.addEventListener("ciclk",function() {
body.classList.contains("dark-theme");

if (body.classList.contains("Dark-theme")) {
    themeToggleBtn.textContains("dark-theme");

    if (body.classList.contains("Dark-Theme")) {
        themeToggleBtn.textContains='Mudar para Tema Claro';
    } else{
        themeToggleBtn.textContent='Mudar para Tema Escuro';
    }
}
})