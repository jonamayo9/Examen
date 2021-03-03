/**
 * Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
 */

function mostrar()
{
	
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var personaViudas = 0;
	var nombreMujerMasJovenSoltera;
	var edadMujerMasJovenSoltera;
	var flagMujerMasJovenSoltera = true;
	var valorDeViaje;
	var pasajeroMayorA60 = 0;
	var totalDePasajeros=0;
	var porcentaje;
	var descuento;
	var totalDescuento;
	var continuar;

	valorDeViaje = 600;

	do { 
		nombre = prompt("Ingrese su nombre: ");
		while (isNaN(nombre)==false || nombre == "") 
		{
			nombre = prompt("hubo un error, Ingrese su nombre: ");
			
		}
		totalDePasajeros++;
		estadoCivil = prompt("Ingrese su Estado Civil: Soltero - Casado - Viudo");
		while (isNaN(estadoCivil)==false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "") 
		{
			estadoCivil = prompt("Hubo un error, Por favor, Ingrese su estado Civil: ");
		}

		edad = prompt("Ingrese su edad");
		while (isNaN(edad) || edad =="" || edad < 17 ) 
		{
			edad = prompt("Hubo un error, Por favor, Ingrese su edad");	
		}

		edad = parseInt(edad);

		temperaturaCorporal = prompt("Ingrese su Temperatura");
		while (isNaN(temperaturaCorporal) || temperaturaCorporal < 36 || temperaturaCorporal > 40) 
		{
			temperaturaCorporal = prompt("Hubo un error, Ingrese su Temperatura");	
		}
		temperaturaCorporal = parseInt(temperaturaCorporal);

		sexo = prompt("Ingrese su Sexo");
		while (isNaN(sexo)==false || sexo !="" && sexo != "f" && sexo != "m") 
		{
			sexo = prompt("Hubo un error, Ingrese su Sexo");
		}


		if (edad > 60 && estadoCivil =="viudo") 
		{
			personaViudas++;
		}

		if (flagMujerMasJovenSoltera==true){
			edadMujerMasJovenSoltera = 200;
			flagMujerMasJovenSoltera = false;
		}

		if (edad < edadMujerMasJovenSoltera && sexo =="f" && estadoCivil == "soltero") 
		{
			edadMujerMasJovenSoltera = edad;
			nombreMujerMasJovenSoltera = nombre;			
		}else{
			edadMujerMasJovenSoltera= 0;
		}

		if (edad > 60) {
			pasajeroMayorA60++;
		}

		continuar = confirm("Quiere ingrese mas pasajeros?");

	}while(continuar);
	
	porcentaje = parseInt(pasajeroMayorA60 * 100 / totalDePasajeros);
	

	if (porcentaje >= 50) 
	{
		descuento = (600 * 25 / 100);
		document.write("el total del pasaje es: " +totalDescuento);
	}else{
		descuento =0;
	}



	totalDescuento = valorDeViaje - descuento;
	totalDescuento = parseInt(totalDescuento);

	document.write("la mujer mas joven soltera " +edadMujerMasJovenSoltera);
	document.write("nombre de la mujer mas joven " + nombreMujerMasJovenSoltera);
	document.write("coontardor de viudas" + personaViudas);
	document.write("El valoe del vaje es: "+valorDeViaje);
	document.write("pasajeros mayor a 60 "+ pasajeroMayorA60);
	document.write("La cantidad de personas Viudas, Mayores a 60 Años son: " +personaViudas);
}