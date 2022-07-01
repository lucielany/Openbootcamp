package Ejercicio3;

public class Concatenar {
    public static void main(String[] args) {


        String[] nombre = {"Sara", "Marcos", "Rubén"};
        String nombres = "";

        for (int i = 0; i < nombre.length; i++) {
            nombres = nombres + nombre[i] + " " ;

        }
        System.out.println(nombres);


        // Concateno 2 arrays

        String[] nombre2 = {"Sara", "Marcos", "Rubén"};

        for (int i = 0; i < nombre2.length; i++) {
        }


        String[] apellidos = {"Canovaca", "Yapura", "Nieto"};

        for (int i = 0; i < apellidos.length; i++) {

            System.out.println(nombre2[i] + " " + apellidos[i]);
        }

    }

}
