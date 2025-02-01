const imagens = document.querySelectorAll(".imagens img");
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('imgModal');
const closeModal = document.getElementById("closeModal");

const mensagem = document.getElementById("messageInput");

imagens.forEach(imagem => {
    imagem.addEventListener("click", ()=>{
        modalImage.src = imagem.src;
        modal.style.display= 'flex';
    })
});
closeModal.addEventListener('click', ()=>{
    modal.style.display = 'none';
})
modal.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
})


function enviarMensagem(){
    if(mensagem.value == ""){
        Toastify({
            text: "Sem mensagem para ser enviada!",
            duration: 2000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {background: "#eb0e24",}
        }).showToast();
        return;     
    }else{
        const contato = "558181564667"
        window.open(`https://wa.me/${contato}?text=${mensagem.value}`)
        mensagem.value = "";
    }  
}

