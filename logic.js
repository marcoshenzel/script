//INÍCIO DA DECLARAÇÃO DAS VARIÁVEIS
var ativo = false; //VARIÁVEL BOOLEANA (true or false)
var div = document.createElement('div'); //VARIÁVEL PARA CRIAR O ELEMENTO DIV
var elemento_audio = document.createElement('audio');//VARIÁVEL PARA CRIAR O ELEMENTO AUDIO
var urlMp3 = document.createElement('p');//VARIÁVEL PARA CRIAR UM ELEMENTO P
const button = document.querySelector('button') //CONSTANTE PARA MANIPULAR EVENTOS NO BOTÃO
var srcPadrao = 'https://www.botecodigital.info/exemplos/audio/i_am_the_doctor.mp3';
var botao = document.getElementById("gwt-debug-acquire_task_button"); //PEGA AS PROPRIEDADES DO BOTÃO QUE OBTÉM AS TAREFAS
var max = 30000;  //VARIÁVEL INTEIRA PARA SETAR O TEMPO MÁXIMO PARA O AUTOCLICK
var min = 1000;  //VARIÁVEL INTEIRA PARA SETAR O TEMPO MÍNIMO PARA O AUTOCLICK
//FINAL DA DECLARAÇÃO DAS VARIÁVEIS

//INÍCIO FUNÇÕES
function init() {
	//INÍCIO AUDIO DIV
	div.setAttribute('id', 'audioDiv');//SETANDO O ATRIBUTO ID NA audioDiv
	document.body.appendChild(div);//INSERINDO A audioDiv NO BODY DA PÁGINA
	elemento_audio.setAttribute('id', 'audio');//SETANDO O ATRIBUTO ID NO ELEMENTO audio
	elemento_audio.setAttribute('src', srcPadrao);//SETANDO O ATRIBUTO src NO ELEMENTO audio
	document.body.appendChild(elemento_audio);//INSERINDO O ELEMENTO audio NO BODY DA PÁGINA
	div.appendChild(elemento_audio);//INSERINDO O ELEMENTO audio DENTRO DA audioDiv
	//FINAL AUDIO DIV
}

function play() { audio.play(); } //FUNÇÃO PARA EXECUÇÃO DO ÁUDIO
function stop() {  //FUNÇÃO PARA PARAR O ÁUDIO, FAZENDO COM QUE O MESMO VOLTE DO INÍCIO QUANDO INICIAR O play() NOVAMENTE
    audio.pause(); 
    audio.currentTime = 0; 
}
function mensagem() {
	play();
    //setTimeout(function() {}, 8460000);
    if (confirm("NOVA TAREFA, BORA TRABALHAR!!")) {
        ativo = true;
        stop();
    }
}
function autoClick(max, min) {//FUNÇÃO PARA EXECUTAR O AUTOCLICK NO BOTÃO DE ADQUIRIR AS TAREFAS
	// INÍCIO AUTO CLICK
	setInterval(function() {
	    if (document.querySelector('#gwt-debug-acquire_task_button')){ //SE O BOTÃO DE ADQUIRIR TAREFAS EXISTIR NA PÁGINA
	        ativo = false;
	        botao.click();
	    } else {
	        if (ativo == false) {
	            mensagem();
	        }
	    }
	}, Math.floor(Math.random() * max + min)); //UM CLICK ALEATÓRIO ENTRE UM TEMPO MÁXIMO EM MILISEGUNDOS E UM TEMPO MÁXIMO EM MILISEGUNDOS
	// FINAL AUTO CLICK
}
//FINAL FUNÇÕES
