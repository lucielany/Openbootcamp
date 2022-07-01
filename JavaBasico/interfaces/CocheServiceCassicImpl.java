package com.company.interfaces;

import com.company.Coche;
import com.company.CocheElectrico;

public class CocheServiceCassicImpl implements CocheService {

    @Override
    public Coche crearCocheDemo() {
        System.out.println("Creando coche clasico");
        return new CocheElectrico();

    }

    @Override
    public void destruirCoche(Coche coche) {
        System.out.println("Destruyendo coche");

    }
}
