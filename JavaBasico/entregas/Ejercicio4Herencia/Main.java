package Ejercicio4;

import Ejercicio4.herencia.SmartPhone;
import Ejercicio4.herencia.SmartWatch;

/**
 * En este ejercicio tendréis que crear una clase SmartDevice. Dentro crearéis las clases hijas: SmartPhone y SmartWatch.
 * <p>
 * Agregaréis atributos tal cual tendrían esos objetos en la realidad.
 * <p>
 * Crear constructor vacío y con todos los parámetros para cada clase.
 * <p>
 * Desde una clase Main: crearéis objetos de cada una y los utilizaréis para imprimir sus valores por consola.
 */


public class Main {

    public static void main(String[] args) {

        SmartDevice Samsung = new SmartDevice();

        SmartDevice galaxy = new SmartDevice("Samsung", "azul", "plástico", 2020, 5.8f, true, 50f, 0);
        System.out.println(galaxy.fabricante);
        System.out.println(galaxy.color);
        System.out.println(galaxy.material);
        System.out.println(galaxy.year);
        System.out.println(galaxy.dimension);
        System.out.println(galaxy.precio);
        galaxy.descuento(30);
        System.out.println(galaxy.precio);

        SmartPhone iPhone = new SmartPhone();
        iPhone.fabricante = "Apple";

        System.out.println(iPhone.fabricante);

        SmartPhone poco = new SmartPhone();
        poco.fabricante = "Xiaomi";
        poco.color = "Azul";
        poco.camara = true;

        System.out.println(poco.fabricante);
        System.out.println(poco.color);
        System.out.println(poco.camara);


        SmartWatch xiaomi = new SmartWatch();
        xiaomi.gps = true;
        System.out.println(xiaomi.gps);

        xiaomi.podometro = true;
        System.out.println(xiaomi.podometro);

        xiaomi.precio = 250f;
        System.out.println(xiaomi.precio);

        SmartWatch sony = new SmartWatch();
        sony.precio = 75f;
        System.out.println(sony.precio);
        sony.descuento(25f);
        System.out.println(sony.precio);


        SmartDevice smartDevice;

        smartDevice = new SmartPhone();
        smartDevice.descuento(30);

        System.out.println("Fin del programa");

    }
}
