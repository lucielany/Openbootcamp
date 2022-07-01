package Ejercicio4;

public class SmartDevice {

    protected String fabricante;
    protected String color;
    protected String material;
    protected int year;
    protected float dimension;
    protected boolean bluetooth;
    protected float precio;

    public SmartDevice() {

    }

    public SmartDevice(String fabricante, String color, String material, int year, float dimension, boolean bluetooth, float precio, float descuento) {
        this.fabricante = fabricante;
        this.color = color;
        this.material = material;
        this.year = year;
        this.dimension = dimension;
        this.bluetooth = bluetooth;
        this.precio = precio;
    }

    public SmartDevice(String color, float dimension) {
        this.color = color;
        this.dimension = dimension;

    }

    public SmartDevice(String fabricante, int year) {
        this.fabricante = fabricante;
        this.year = year;
    }

    public void descuento(float cantidad) {
        this.precio -= cantidad;
    }

}
