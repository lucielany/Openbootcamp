package com.company;

public class Coche {

    //atributos
    String color;
    String fabricante;
    String modelo;
    Double peso;
    Double largo;
    Integer velocidad = 0;

    String name = "nombre coche"; // Creamos atributo para ListMain

    //constructores
    public Coche() {

    }
    public Coche(String color, String fabricante, String modelo, Double peso, Double largo) {
        this.color = color;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.peso = largo;
        this.largo = largo;

    }
    //Creamos para ListasMain
    public Coche(String name){
        this.name = name;
    }




    //comportamiento

    public void acelerar(Integer cantidad){
        if(cantidad > 0 && cantidad <=120)
        this.velocidad += cantidad;
    }

    /*@Override
    public String toString() {
        return "Coche{" +
                "color='" + color + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", modelo='" + modelo + '\'' +
                ", peso=" + peso +
                ", largo=" + largo +
                ", velocidad=" + velocidad +
                '}';
    }*/
    //Creo metodo toString para mostrar los datos de ListasMain (click derecho generate...)


    @Override
    public String toString() {
        return "Coche{" +
                "name='" + name + '\'' +
                '}';
    }
}
