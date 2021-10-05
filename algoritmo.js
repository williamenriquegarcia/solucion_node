/*Algoritmo que calcula todos los grupos posibles que puedan viajar en un bus
William García 2021-10-04*/


//Simula entrada de un request 
const request = {"groups":"1,2,1,1,1,2,1,3"};
const grupos = request.groups


//Forma cadena del texto de una linea de codigo que almacena el tamaño de lois grupos en un array
var arrayGrupos;
const texto = "arrayGrupos = ["+grupos+"]";


//convierte la cadena de texto a código
eval(texto);


//Halla todas las sumas posibles en el array
function sumarGrupos(arrayGrupos)
{
	let arraySumas = [];
	for (let i = 0; i < arrayGrupos.length; i++) 
	{
		arraySumas.push(iterarGrupo(i,arrayGrupos));
	}
	let vector = evaluarSuma(arraySumas,arrayGrupos);
	return vector;
}


function iterarGrupo(i,arrayGrupos) 
{
	let suma = 0;
	for (let j = i; j >= 0; j--) 
	{
		suma = suma + arrayGrupos[j];
	}
	return(suma);
}


//Evalua que cada suma posible cumpla con las reglas del algoritmo
function evaluarSuma(arraySumas,arrayGrupos)
{
	let vectorSalida = [];	
	for (let k = 0; k < arraySumas.length; k++) 
	{
		if (iterarSuma(arrayGrupos,arraySumas[k])) 
		{
			vectorSalida.push(arraySumas[k]);
		}
	}
	return (vectorSalida);
}


function iterarSuma(arrayGrupos,muestra) 
{
	let suma = arrayGrupos[0];
	let subvector = []; 
	for (let l = 0; l < arrayGrupos.length; l++) 
	{
		if (suma == muestra) 
		{
			subvector = [];
			suma = arrayGrupos[l+1];
		}
		else
		{
			subvector.push(arrayGrupos[l]);
			suma = suma + arrayGrupos[l+1];
		}
	}
	if (subvector.length === 0) 
	{
		return true;
	}
}


//LLamado a la función principal
console.log(sumarGrupos(arrayGrupos));