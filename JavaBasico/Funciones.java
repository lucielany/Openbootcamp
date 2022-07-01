package com.company;

import java.sql.SQLOutput;

public class Funciones {
    
    
    
    public static void main(String[] args) {

        holaMundo(); // Creo una funcion para evitar escribir esto varias veces. Debo crear un método
        holaMundo(4);
        holaMundo("Nombre");
        //holaMundo();

        //System.out.println("Hola mundo");
        //System.out.println("Hola mundo");

        //System.out.println("Hola mundo");
        //System.out.println("Hola mundo");

        //holaMundo("Alan");
        //holaMundo("Roberto");

        String hola = devolverHola();
        System.out.println(hola);
        
    }

    // creamos el metodo
    // private solo puede ser invocada desde esta clase (no podrá ser invocada desde otro archivo java)

    private static void holaMundo() {                                //Asignatura
        System.out.println("Hola mundo");                           //Cuerpo del método
        System.out.println("Hola mundo");
    }

    private static void holaMundo(String name) {
        System.out.println("Hola " + name);
    }

    private static void holaMundo(Integer number) {
        System.out.println("El numero es: " + number);
    }

    private static void holaMundo(String name, String surname) {
        System.out.println("Hola " + name + "" + surname);
    }

    private static String devolverHola() {
        return "Hola";
    }

    private static int sum(int num1, int num2){
        return num1 + num2;
    }

}
