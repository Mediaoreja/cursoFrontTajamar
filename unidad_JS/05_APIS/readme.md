API = Application Program Interface -- Intefaz de un programa de aplicaciones

Todo lenguaje de programación tiene:
    - palabras reservadas: var, let, const, if, for, function, ...
    - operadores: +, -, *, /, %, ||, &&, typeof
    - conjunto de funciones ya hechas: esto constituye el interfaz, agrupados en distintos APIs:

        - APIs deL Core (internos de JS)
            - funciones globales: ParsInt(), ParseFloat(), IsNaN()
            - Métodos propios de los objetos


        - APIs del Host (del navegador y del servidor (Node.js)
            - Browser:
                - Objeto Window (la ventana del navegadro) y sus propiedades -> el BOM
                    - window.alert()
                    - setTimeout()
                - Objeto Documento -> DOM
            - Nuevos APIs de HTML5
                - <video>
            - Node
                -objeto global de Node
                    - setTimeout()
