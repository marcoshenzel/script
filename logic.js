//INÍCIO DA DECLARAÇÃO DAS VARIÁVEIS
var count = 0;
var enviar = document.getElementById("gwt-debug-acquire_task_button");
var div = document.createElement('div');
var progresso = document.createElement('progress');
var span = document.createElement('span');
var span1 = document.createElement('span');
var a = document.createElement('a');
var a1 = document.createElement('a');
var a2 = document.createElement('a');
var elemento_audio = document.createElement('audio');
var source = document.createElement('source');
var source1 = document.createElement('source');
var urlOgg = document.createElement('p');
var urlMp3 = document.createElement('p');
//FINAL DA DECLARAÇÃO DAS VARIÁVEIS

//INICIO AUDIO DIV
div.setAttribute('id', 'audiodiv');
document.body.appendChild(div);
elemento_audio.setAttribute('id', 'audio');
document.body.appendChild(elemento_audio);
div.appendChild(elemento_audio);
//source.setAttribute('src', '04 - Fear Is The Key.ogg');
source.setAttribute('src', urlOgg.innerText);
source.setAttribute('type', 'audio/ogg');
document.body.appendChild(source);
elemento_audio.appendChild(source);
//source1.setAttribute('src', '04 - Fear Is The Key.mp3');
source1.setAttribute('src', urlMp3.innerText);
source1.setAttribute('type', 'audio/mpeg');
document.body.appendChild(source1);
elemento_audio.appendChild(source1);
urlOgg.setAttribute('id', 'e_urlOgg');
document.body.appendChild(urlOgg);
urlOgg.appendChild(document.createTextNode('https://www.botecodigital.info/exemplos/audio/i_am_the_doctor.ogg'));
urlMp3.setAttribute('id', 'e_urlMp3');
document.body.appendChild(urlMp3);
urlMp3.appendChild(document.createTextNode('https://www.botecodigital.info/exemplos/audio/i_am_the_doctor.mp3'));

//INÍCIO BARRA PROGRESSO
progresso.setAttribute('id', 'barra_progresso');
progresso.setAttribute('max', '101.359456');
progresso.setAttribute('value', '0.022154');
document.body.appendChild(progresso);
//FINAL BARRA PROGRESSO

span.setAttribute('id', 'tempo_atual');
span.appendChild(document.createTextNode('00:00:00'));
div.appendChild(span);
span1.setAttribute('id', 'tempo_total');
span1.appendChild(document.createTextNode('00:01:41'));
div.appendChild(span1);
// FINAL AUDIO DIV


// INÍCIO LÓGICA SCRIPT DO ÁUDIO
audio = document.getElementById('audio');

audio.addEventListener('play', play_evento, false);
audio.addEventListener('timeupdate', atualizar, false);
audio.addEventListener('loadedmetadata', loadedMetadata, false);

function play() { audio.play(); }
function pause() { audio.pause(); }
function stop() { 
    audio.pause(); 
    audio.currentTime = 0; 
}

function loadedMetadata() {
    channels          = audio.mozChannels;
    rate              = audio.mozSampleRate;
    frameBufferLength = audio.mozFrameBufferLength;      
}

function play_evento() { 
    document.getElementById('tempo_atual').innerHTML = secToStr(audio.currentTime);
    document.getElementById('tempo_total').innerHTML = secToStr(audio.duration);

    document.getElementById('barra_progresso').max = audio.duration;
    document.getElementById('barra_progresso').value = audio.currentTime;
}
function atualizar() {
    document.getElementById('tempo_atual').innerHTML = secToStr(audio.currentTime);
    document.getElementById('barra_progresso').value = audio.currentTime;
}

function secToStr(sec_num) {
    sec_num = Math.floor(sec_num);
    var horas = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);

    if (horas < 10) {horas = "0"+horas;}
    if (minutos < 10) {minutos = "0"+minutos;}
    if (segundos < 10) {segundos = "0"+segundos;}
    var tempo = horas+':'+minutos+':'+segundos;
    return tempo;
}
// FINAL LÓGICA SCRIPT DO ÁUDIO
