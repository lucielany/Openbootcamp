package com.company;

import java.util.IllegalFormatCodePointException;

public class WhileLoop {            //ESTRUCTURAS DE CONTROL ITERATIVOS - INDETERMINADAS


    public static void main(String[] args) {

        //boolean check = true;

        int count = 0;
        while (count < 10){         // la condición es necesaria evitar que sea un bucle infinito
            //System.out.println(count + " Hola mundo");

            count++; //condicion
            if (count == 6)
                break;   //rompe el flujo de ejecución y sale del bucle
                //continue; // salta el valor 6 y continúa  ala siguiente iteración

            System.out.println("Hola mundo " + count);

        }
        System.out.println("fin");
    }
}
