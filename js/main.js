let h2 = document.getElementById('h2');
let clickHtml = document.getElementById('bs-html');
let clickCss = document.getElementById('bs-css');
let clickJs = document.getElementById('bs-js');
let clickPython = document.getElementById('bs-python');
let clickEnglish = document.getElementById('bs-english');
let clickFrench = document.getElementById('bs-french');
let clickWordpress = document.getElementById('bs-wordpress');
let paragraph = document.getElementById('paragraph');

clickHtml.addEventListener('click', function() {
    let title = "HTML";
    let texto1 = "Esto es un texto para la zona html";
    cambiarTexto(texto1, title);
});
clickCss.addEventListener('click', function() {
    let title = "CSS";
    let texto1 = "Esto es un texto para la zona html2";
    cambiarTexto(texto1, title);
});
clickJs.addEventListener('click', function() {
    let title = "Javascript";
    let texto1 = "Esto es un texto para la zona html3";
    cambiarTexto(texto1, title);
});
clickPython.addEventListener('click', function() {
    let title = "Python";
    let texto1 = "Esto es un texto para la zona html4";
    cambiarTexto(texto1, title);
});
clickEnglish.addEventListener('click', function() {
    let title = "Inglés";
    let texto1 = "Esto es un texto para la zona html5";
    cambiarTexto(texto1, title);
});
clickFrench.addEventListener('click', function() {
    let title = "Francés";
    let texto1 = "Esto es un texto para la zona html6";
    cambiarTexto(texto1, title);
});
clickWordpress.addEventListener('click', function() {
    let title = "Wordpress";
    let texto1 = "Esto es un texto para la zona html7";
    cambiarTexto(texto1, title);
});

function cambiarTexto(value, value2) {
    h2.textContent = value2;
    paragraph.textContent = value;
}