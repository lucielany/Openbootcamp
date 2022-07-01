package com.company;

import java.util.HashMap;
import java.util.Map;

public class MapMain {

    public static void main(String[] args) {

        Map<String, String> personas = new HashMap();

        personas.put("12345678H", "Nombre Apellido 1");
        personas.put("12345678L", "Nombre Apellido 2");
        personas.put("12345678P", "Nombre Apellido 3");

        System.out.println(personas);

        for(String key : personas.keySet()) {  // Con keySet imprimimos solo las claves
            System.out.println(key);
        }

        for(String value : personas.values()) { // Con value imprimimos el valor en este caso es un String
            System.out.println(value);
        }

        for (Map.Entry<String, String> pair : personas.entrySet()) {  // Imprimimos ambos valores
            System.out.println(pair.getKey() + " / " + pair.getValue());
        }
    }
}
