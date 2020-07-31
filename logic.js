var botao = document.getElementsByClassName("start-button"); //PEGA AS PROPRIEDADES DO BOTÃO QUE OBTÉM AS TAREFAS

//INÍCIO FUNÇÕES
function init() {
	//INÍCIO DA DECLARAÇÃO DAS VARIÁVEIS
	var max = 30000;  //VARIÁVEL INTEIRA PARA SETAR O TEMPO MÁXIMO PARA O AUTOCLICK
	var min = 1000;  //VARIÁVEL INTEIRA PARA SETAR O TEMPO MÍNIMO PARA O AUTOCLICK
	var ativo = false; //VARIÁVEL BOOLEANA (true or false)
	var div = document.createElement('div'); //VARIÁVEL PARA CRIAR O ELEMENTO DIV
	var elemento_audio = document.createElement('audio');//VARIÁVEL PARA CRIAR O ELEMENTO AUDIO
	var urlMp3 = document.createElement('p');//VARIÁVEL PARA CRIAR UM ELEMENTO P
	//var pastaBase = 'https://raw.githubusercontent.com/marcoshenzel/script/gh-pages/';
	var srcPadrao = 'https://www.botecodigital.info/exemplos/audio/i_am_the_doctor.mp3';
	//FINAL DA DECLARAÇÃO DAS VARIÁVEIS

	//INÍCIO AUDIO DIV
	div.setAttribute('id', 'audioDiv');//SETANDO O ATRIBUTO ID NA audioDiv
	document.body.appendChild(div);//INSERINDO A audioDiv NO BODY DA PÁGINA
	elemento_audio.setAttribute('id', 'audio');//SETANDO O ATRIBUTO ID NO ELEMENTO audio
	elemento_audio.setAttribute('src', srcPadrao);//SETANDO O ATRIBUTO src NO ELEMENTO audio
	document.body.appendChild(elemento_audio);//INSERINDO O ELEMENTO audio NO BODY DA PÁGINA
	div.appendChild(elemento_audio);//INSERINDO O ELEMENTO audio DENTRO DA audioDiv
	//FINAL AUDIO DIV
}

function trocaFaixa(url) {
	audio.src = url;
	play();
	audio.muted = true;
}

function play() {//FUNÇÃO PARA EXECUÇÃO DO ÁUDIO
   	audio.currentTime = 0;  //VARIÁVEL PADRÃO PARA DEFINIR EM QUAL SEGUNDO O ÁUDIO VAI INICIAR
	audio.play(); 
	mute();
} 
function stop() {  //FUNÇÃO PARA PARAR O ÁUDIO, FAZENDO COM QUE O MESMO VOLTE DO INÍCIO QUANDO INICIAR O play() NOVAMENTE
	mute();
    	audio.pause(); //FUNÇÃO PADRÃO PARA PAUSAR O ÁUDIO
    	audio.currentTime = 0;  //VARIÁVEL PADRÃO PARA DEFINIR EM QUAL SEGUNDO O ÁUDIO VAI INICIAR
}
function mute() {
	if (audio.muted) {
		audio.muted = false;
	} else {
		audio.muted = true;
	}
}
function mensagem() { //MÉTODO PARA ENVIAR A MENSAGEM PARA O USUÁRIO QUANDO ENCONTRAR UMA NOVA TAREFA
	play(); //MÉTODO PARA TOCAR A MÚSICA
	//setTimeout(function() {}, 8460000);
	if (confirm("NOVA TAREFA, BORA TRABALHAR!!")) {
		ativo = true;
		stop();
    	}
}
function run(max, min) {//FUNÇÃO PARA EXECUTAR O AUTOCLICK NO BOTÃO DE ADQUIRIR AS TAREFAS
	// INÍCIO AUTO CLICK
	init(); // CRIA OS ELEMENTOS HTML NECESSÁRIOS PARA RODAR O ÁUDIO;
	setInterval(function() {
	    if (botao.disabled = false){ //SE O BOTÃO DE ADQUIRIR TAREFAS EXISTIR NA PÁGINA
	        ativo = true;
	        botao.click();
	    } else {
	        if (ativo == true) {
	            mensagem();
	        }
	    }
	}, 1000); //UM CLICK POR SEGUNDO
	// FINAL AUTO CLICK
}
//FINAL FUNÇÕES
