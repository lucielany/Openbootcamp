package Ejercicio2;

public class Funcion {

    public static void main(String[] args) {

        double importe = 100;
        double iva = 21;

        double resultado = precioIva(importe, iva);
        System.out.println("El precio con iva es " + resultado);
    }

    static double precioIva(double precio, double porcentajeIva) {
        return precio + ((precio * porcentajeIva) / 100);

    }
}
