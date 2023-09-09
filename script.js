function toggleMode() {
    const html = document.documentElement

    // função didática para execução dos temas claro/escuro
    /*
    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    */

// toggle executa a função inteira acima
html.classList.toggle('light')
}