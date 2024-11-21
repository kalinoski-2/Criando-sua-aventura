

const avanca =docoment.queryselectonall('.btn-proximo');
avanca.forEac(button => {
button.addEventListener('click',function (){
    const atual = document.querySelector('.ativo')
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

    atual.classlist.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');

})
})