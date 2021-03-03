/**
 * Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
 */
function mostrar()
{
var nombreProducto;
var precio;
var cantidadUnidades;
var tipoInflamable;
var marca;
var acumuladorUnidadesAlcohol;
var acumuladorUnidadesIac;
var acumuladorUnidadesQuat;
var contadorAlcohol;
var contadorIac;
var i;
var promedioAlcohol;
var promedioIac;
var promedioQuat;
var acumuladorIacMenorPrecio;
var flagMenorPrecio=true;
var mayorPrecio;
var marcaMasCara;
var flagMarcaMasCara=true;

acumuladorUnidadesAlcohol = 0;
contadorAlcohol=0;
acumuladorUnidadesIac = 0;
contadoIac = 0;
acumuladorUnidadesQuat=0;
contadorQuat = 0;

	
for ( i = 0; i < 2; i++) 
{
		nombreProducto = prompt("Ingrese el nombre del producto: alcohol - iac - quat");
		while (isNaN(nombreProducto)==false || nombreProducto != "alcohol" && nombreProducto != "iac" && nombreProducto != "quat" && nombreProducto != "") 
		{
			nombreProducto = prompt("Hubo un error, Por favor, el nombre del producto: ");
		}

			
		precio = prompt("Ingrese el precio");
		while (isNaN(precio) || precio =="" || precio < 100 || precio > 300 ) 
		{
			precio = prompt("Hubo un error, Por favor, Ingrese el precio");	
		}
	
		cantidadUnidades = prompt("Ingrese las unidades");
		while (isNaN(cantidadUnidades) || cantidadUnidades =="" || cantidadUnidades < 0 || cantidadUnidades > 1000 ) 
		{
			precio = prompt("Hubo un error, Por favor, Ingrese las unidades");	
		}
		

		tipoInflamable = prompt("Ingrese el tipo de inflamable: ignífugo - combustible - explosivo");
		while (isNaN(tipoInflamable)==false || tipoInflamable != "ignífugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo" && tipoInflamable != "") 
		{
			tipoInflamable = prompt("Hubo un error, Por favor, Ingrese el tipo de inflamable: ");
		}
	
		marca = prompt("ingrese la Marca");
		while(isNaN(marca)==false || marca == "")
		{
			marca = prompt("Hubo un error, ingrese la Marca");
		}
		cantidadUnidades= parseInt(cantidadUnidades);
		if (nombreProducto == "alcohol") 
		{
			acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + cantidadUnidades; 
			contadorAlcohol++;
		}else
		{
			if (nombreProducto == "iac") 
			{
				acumuladorUnidadesIac = acumuladorUnidadesIac + cantidadUnidades;
				contadorIac++;
			}else
			{
				if (nombreProducto == "quat") 
				{
					acumuladorUnidadesQuat = acumuladorUnidadesQuat + cantidadUnidades;
					contadorQuat++;
				}
			}
		}


		if (contadorAlcohol>contadorIac && contadorAlcohol > contadorQuat) 
		{
			document.write("El inflamable con mas unidades en el total de la compra es: Alcohol");	
		}else
		{
			if (contadorIac>contadorAlcohol && contadorIac>contadorQuat) 
			{
				document.write("El inflamable con mas unidades en el total de la compra es: IAC ");
			}else
			{
				if (contadorQuat>contadorAlcohol && contadorQuat>contadorIac) 
				{
					document.write("El inflamable con mas unidades en el total de la compra es: Quat");
				}
			}
		}
		cantidadUnidades= parseInt(cantidadUnidades);
		if (flagMenorPrecio==true) 
		{
			acumuladorIacMenorPrecio=0
			flagMenorPrecio=false	
		}
		if (nombreProducto == "iac" && precio < 200) 
		{
			acumuladorIacMenorPrecio = acumuladorIacMenorPrecio + cantidadUnidades;
		}

		if (flagMarcaMasCara==true) 
		{
			mayorPrecio=300;
			flagMarcaMasCara= false;
		}
		if (mayorPrecio > precio) 
		{
			mayorPrecio = precio;
			marcaMasCara = marca;
		}
	
	}

	promedioAlcohol = acumuladorUnidadesAlcohol / contadorAlcohol;
	promedioIac =  acumuladorUnidadesIac / contadorIac;
	promedioQuat = acumuladorUnidadesQuat / contadorQuat;

	document.write(" El promedio de cantidad de alcohol es: " +promedioAlcohol+"</br>");
	document.write(" El promedio de cantidad de IAC es: "  +promedioIac+"</br>");
	document.write(" El promedio de cantidad de alcohol es: " + promedioQuat)+"</br>";
	document.write("la cantidad de unidades IAC menor a 200 es: " + acumuladorIacMenorPrecio+"</br>");
	document.write("la marca y tipo del más caro de los productos: " + marcaMasCara+ " de precio "+mayorPrecio+"</br>");

}
