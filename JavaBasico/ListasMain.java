package com.company;

import java.util.ArrayList;
import java.util.List;


public class ListasMain {

    public static void main(String[] args){

        List<String> nombres = new ArrayList<>();

        nombres.add("Nombre 1");
        nombres.add("Nombre 2");
        nombres.add("Nombre 3");
        nombres.add("Nombre 4");

        System.out.println(nombres + "A");

        for(String nombre: nombres) {    //String nombre: se crea una variable temporal
            System.out.println(nombre + "B");
        }

        List<Coche> coches = new ArrayList<>();

        coches.add(new Coche("honda civic"));
        coches.add(new Coche("halfa romeo"));
        coches.add(new Coche("ford mondeo"));

        System.out.println(coches + "C");       //Creo método toString en Coche para que imprima los datos


        //creamos bucle para imrpimir por pantalla
        for(Coche coche: coches){
            System.out.println(coche + "D");
        }
    }
}
