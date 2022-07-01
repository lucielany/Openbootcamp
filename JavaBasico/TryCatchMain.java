package com.company;

public class TryCatchMain {

    public static void main(String[] args) {

        try {
            int result = 5 / 5;
        }catch (ArithmeticException e) {   //ArithmeticExceotion porque es un problema aristmético
            e.printStackTrace();    // Imprimimos el error por la salida estandar para registrar fallo
        }finally {
            System.out.println("Cierre de recursos");
        }


        System.out.println("Fin del programa");
    }
}
