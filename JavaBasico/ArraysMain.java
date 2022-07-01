package com.company;

public class ArraysMain {

    public static void main(String[] args) {

        String nombre1 = "nombre 1";
        String nombre2 = "nombre 2";
        String nombre3 = "nombre 3";
        String nombre4 = "nombre 4";


        //creamos estructuras de datos

        String [] nombres = new String [4]; //opción 1:  4 especificamos el número de elementos que tendrá el array
        String [] nombres2 = new String []{nombre1, nombre2, nombre3, nombre4}; //Opción 2

        int[] numeros = new  int [5]; // si almaceno números...
        Coche[] coches = new Coche [2]; //Si almacenamos objetos

        //Opción 1 esta forma ocupa más líneas de código. Mejor opción 2
        nombres[0] = nombre1;
        nombres[1] = nombre2;
        nombres[2] = nombre3;
        nombres[3] = nombre4;

        System.out.println(nombres[0]); // Si quiero imprimir un nombre específico defino la posición

        //Creamos un bucle for para recorrer todos los datos del array

        for (int i = 0; i < nombres.length; i++) {
            System.out.println(nombres[i]);

        }
    }
}
