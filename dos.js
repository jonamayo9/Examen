/**
 * 
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
 */
function mostrar()
{
 var nombre;
 var tipoDeCursada;
 var cantidadDeMaterias;
 var sexo;
 var nota;
 var edad;
 var alumnoMasJoven;
 var nombreAlumnoLibre;
 var flagNombreAlumnoLibre = true;
 var acumuladorNotaSexoFem=0;
 var acumuladorNotaSexoMas=0;
 var acumuladorNotaSexoNoBinario=0;
 var contadorMasc=0;
 var contadorFem=0;
 var contadorNoBinario=0;
 var promedioMasc;
 var promedioFem;
 var promedioNoBinario;
 var continuar;
 var alumnoMayorCantidadMaterias;
 var alumnoEdadMayorMateria;
 var alumnoNombreMayorMateria;

 do{ 
    nombre = prompt("Ingrese su nombre");
    while (isNaN(nombre)==false || nombre == "") 
    {
      nombre = prompt("hubo un error, Ingrese su nombre: ");
    }

    tipoDeCursada = prompt("Ingrese el tipo de cursada: libre - presencial - remota");
    while (isNaN(tipoDeCursada)==false || tipoDeCursada != "libre" && tipoDeCursada != "presencial" && tipoDeCursada != "remota" && tipoDeCursada != "") 
    {
      tipoDeCursada = prompt("Hubo un error, Por favor, Ingrese el tipo de Cursada: ");
    }


    cantidadDeMaterias = prompt("Ingrese cantidad de materias");
    while (isNaN(cantidadDeMaterias) || cantidadDeMaterias =="" || cantidadDeMaterias < 0 || cantidadDeMaterias > 10 ) 
    {
      cantidadDeMaterias = prompt("Hubo un error, Por favor, Ingrese el precio");	
    }

    sexo = prompt("Ingrese su Sexo");
    while (isNaN(sexo)==false || sexo !="" && sexo != "f" && sexo != "m" && sexo != "no binario") 
    {
      sexo = prompt("Hubo un error, Ingrese su Sexo");
    }

    nota = prompt("ingrese la nota");
    while(isNaN(nota) || nota < 0 || nota > 10)
    {
      nota = prompt("Hubo un error, ingrese la nota");
    }

    edad = prompt("Ingrese su edad");
    while (isNaN(edad) || edad =="" ) 
    {
      edad = prompt("Hubo un error, Por favor, Ingrese su edad");	
    }

    if (sexo == "f") 
    {
        acumuladorNotaSexoFem = acumuladorNotaSexoFem + parseInt(nota);  
        contadorFem++;
    }else
    {
      if (sexo == "m") 
      {
        acumuladorNotaSexoMas = acumuladorNotaSexoMas + parseInt(nota);
        contadorMasc++;
      }else
      {
        if (sexo == "no binario") 
        {
          acumuladorNotaSexoNoBinario = acumuladorNotaSexoNoBinario + parseInt(nota);
          contadorNoBinario++;
        }
      }
    }

    acumuladorNotaSexoNoBinario = parseInt(acumuladorNotaSexoNoBinario);
    acumuladorNotaSexoMas = parseInt(acumuladorNotaSexoMas);
    acumuladorNotaSexoFem = parseInt(acumuladorNotaSexoFem);

    if (flagNombreAlumnoLibre==true) 
    {
        alumnoMasJoven = 9999;
        alumnoMayorCantidadMaterias = 0
        flagNombreAlumnoLibre=false
    }
    if (alumnoMasJoven<edad && tipoDeCursada == "libre") 
    {
        alumnoMasJoven = edad;
        nombreAlumnoLibre = nombre;
    }
    
    if (cantidadDeMaterias > alumnoMayorCantidadMaterias && tipoDeCursada != "remota") 
    {
      alumnoEdadMayorMateria = edad;
      alumnoNombreMayorMateria = nombre;
    }

        continuar=confirm("Quiere ingresar otro alimno?");

 }while(continuar);

 promedioFem = acumuladorNotaSexoFem / contadorFem;
 promedioMasc =acumuladorNotaSexoMas / contadorMasc;
 promedioNoBinario =acumuladorNotaSexoNoBinario / contadorNoBinario;

 console.log("el promedio de nota de Femenino es: " + promedioFem);
 console.log("el promedio de nota de Masculino es: " + promedioMasc);
 console.log("el promedio de nota de No Binario es: " + promedioNoBinario);
 console.log("el alumno mas joven que da libre es: "+ nombreAlumnoLibre);
 console.log("La edad y nombre del que cursa mas materias que no sean en forma remota es: " +alumnoNombreMayorMateria +" de edad " +alumnoEdadMayorMateria);
}