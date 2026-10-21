function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
       img.setAttribute('src', 'assets/avatar-light.png')
       img.setAttribute('alt', 'Foto do instrutor Mayk Brito sorrindo de óculos escuros e casaco de couro, sem barba e fundo roxo com azul')
    } else {
       img.setAttribute('src', 'assets/avatar.png')
       img.setAttribute('alt', 'Foto do instrutor Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo')
    }
}