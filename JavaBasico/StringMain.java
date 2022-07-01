package com.company;

public class StringMain {

    public static void main(String[] args) {

        //La clase String

    /*
        length
        startsWith("")
        endsWith("")
        indexOf("")
        subString(1,5)
        trim()
        equals()
        CompareTo
     */

        String mensaje = "   Hola mundo   ";
        System.out.println(mensaje);

        System.out.println(mensaje.length());
        String mensajeMAY = mensaje.toUpperCase(); // convierte en mayúscula y lo almacena en una nueva variable (mensajeMAY)
        System.out.println(mensajeMAY);
        System.out.println(mensajeMAY.trim()); //Imprimo mensajeMAY quitándole los espacios
        mensajeMAY = mensajeMAY.trim();

        String otro = "HOLA MUNDO";
        System.out.println(otro);

        if (mensajeMAY.equals(otro)) {      //compruebo si "mensaje" que hemos convertido en mayusculas y lo hemos almacenado en "mensajeMAY" es igual a "otro"
            System.out.println("verdadero!!");
        }else{
            System.out.println("falso");

        }

    }
}

/*  //Tambien se puede hacer así
        String mensaje = "   Hola mundo   ";
        System.out.println(mensaje);
        System.out.println(mensaje.length());  // mide la longitud
        mensaje = mensaje.toUpperCase();   //convierte en mayúsculas
        mensaje = mensaje.trim();        //quita los espacios
        System.out.println(mensaje);
        System.out.println(mensaje.length());

        String otro = "HOLA MUNDO";     //creo una nueva variable llamada "otro"
        System.out.println(otro);

        if (mensaje.equals(otro)) {     //compruebo si "mensaje" es igual a "otro"
            System.out.println("verdadero!!");
        }*/