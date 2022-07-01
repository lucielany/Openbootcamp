package com.company.interfaces;

import com.company.Coche;

public class InterfaceMain {

    public static void main(String[] args) {


        CocheService service = new CocheServiceSportImpl();

        Coche coche = service.crearCocheDemo();

    }
}
