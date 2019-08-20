var reset=false

function teclapeq(id){
  document.getElementById(id).style="width:78px";
}

function teclagrande(id){
  document.getElementById(id).style="width:98px";
}

function LimpiarCalculadora(){
  document.getElementById('display').innerHTML=0
  sessionStorage.clear();
}

function masmenos(){
		var caja2 = document.getElementById('display').innerHTML;
		if (caja2 > 0){
			document.getElementById('display').innerHTML = "-" + caja2;
		}
		else{
			cajaplus = caja2.replace(/[-|(|)]/g, "");
			document.getElementById('display').innerHTML = cajaplus;
		}
	}

function TeclaPresionada(event){
  display=document.getElementById('display')
  if (display.innerHTML==0||reset==true){
    reset=false
    display.innerHTML=''
  }
        digitos=document.getElementById('display').innerHTML.length
      var tecla = event.which || event.keycode
      if (digitos >=8){
        alert('Maximo de numeros')
      }
    //   else if (display.innerHTML == "0" && String.fromCharCode(tecla) != "."){
		// 	cajao = display.innerHTML.replace("0", "0. ")
		// 	document.f1.txtcaja2.value = cajao + String.fromCharCode(tecla);
		// }
      else{

        AgregarNumero(String.fromCharCode(tecla))
      }

    }

function presionaNumero(id){
      display=document.getElementById('display')

      if (display.innerHTML==0||reset==true){
        display.innerHTML=''
        reset=false
      }
          digitos=document.getElementById('display').innerHTML.length
          if (digitos >=8){
            alert('Maximo de numeros')
          }
          else{
            AgregarNumero(id);
          }
    }

function AgregarNumero(Num){
  if (display.innerHTML.includes('.')  && Num == '.')
  {
  alert("ya hay un punto");
  return
  }
   if (display.innerHTML == "0" && String.fromCharCode(Num) != "."){
    cajao = display.innerHTML.replace("0", "")
    display.innerHTML = cajao + Num;
}
else{
  display=document.getElementById('display')
  display.innerHTML= display.innerHTML + Num;
}
}

function ObtenerID(e) {
      e = e || window.event;
      e = e.target || e.srcElement;
      var iddom=e.id
      // return iddom
        }

function Suma(){
    var numero1= document.getElementById('display').innerHTML
    sessionStorage.setItem('numero1',numero1);
    var operador="+"
    sessionStorage.setItem('operador',operador);
    document.getElementById('display').innerHTML="0"
    }

function resta(){
        var numero1= document.getElementById('display').innerHTML
        sessionStorage.setItem('numero1',numero1);
        var operador="-"
        sessionStorage.setItem('operador',operador);
        document.getElementById('display').innerHTML="0"
        }

function multi(){
    var numero1= document.getElementById('display').innerHTML
    sessionStorage.setItem('numero1',numero1);
    var operador="*"
    sessionStorage.setItem('operador',operador);
    document.getElementById('display').innerHTML="0"
    }

function division(){
        var numero1= document.getElementById('display').innerHTML
        sessionStorage.setItem('numero1',numero1);
        var operador="/"
        sessionStorage.setItem('operador',operador);
        document.getElementById('display').innerHTML="0"
        }

function ResultadoTotal(){
  const numero2= document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML=" "
  const numero1 =sessionStorage.getItem('numero1')
  var operador=sessionStorage.getItem('operador')
  const resultado=0
  if (operador=="+"){
    this.resultado= Number(numero1) +  Number(numero2);
  }
  if (operador=="-"){
    this.resultado =Number(numero1) -  Number(numero2);
  }
  if (operador=="*"){
    this.resultado =Number(numero1) *  Number(numero2);
  }
  if (operador=="/"){
    this.resultado =Number(numero1) /  Number(numero2);
  }
  document.getElementById('display').innerHTML=this.resultado
  reset=true
  }

var AsignarEventos={
  init:function(){
    this.Eventos()
  },
  Eventos: function(){
    document.onkeypress=TeclaPresionada;
    document.getElementById('mas').onclick=Suma
    document.getElementById('menos').onclick=resta
    document.getElementById('por').onclick=multi
    document.getElementById('dividido').onclick=division
    document.getElementById('igual').onclick=  ResultadoTotal
    document.getElementById('sign').onclick= masmenos
    document.getElementById('on').addEventListener('click',function(){LimpiarCalculadora()})

    for(i=0; i < 10; i++){
    	document.getElementById(i).onclick=function() {presionaNumero(this.id)};
    }

    document.getElementById('punto').onclick=function(){
      AgregarNumero('.')
    }

    var teclas = document.querySelectorAll('img.tecla');
    for(i=0; i < teclas.length; i++){
    	teclas[i].onmousedown=function() {teclagrande(this.id)};
      teclas[i].onmouseup=function() {teclapeq(this.id)};
    }
  }
}
AsignarEventos.init();

// document.addEventListener('keypress', function(e) {
//   if (e.which == 48) {
//     if (display.innerHTML==0)
//       {
//         alert('presione otro numero')
//         return
//       }
//     else{
//         TeclaPresionada(e.which)
//         }
//       }
//     })
