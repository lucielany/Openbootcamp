package com.company;

public class InElse {                    //ESTRUCTURAS DE CONTROL CONDICIONAL


    public static void main(String[] args) {

        boolean check = 5 <  10;

        int number1 = 50;
        int number2 = 10;
        int number3 = 20;
        int number4 = 1000;

        //if(check){  //if(5 <  10)
        if (number1 < number2 && number2 < number3){
            System.out.println("verdadero");
        }else if(number3 < number4){
            System.out.println("else if");
        }
        System.out.println("Fin");
    }
}
