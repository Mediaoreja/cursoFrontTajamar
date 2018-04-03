API = Application Program Interface -- Intefaz de un programa de aplicaciones

Todo lenguaje de programación tiene:
    - palabras reservadas: var, let, const, if, for, function, ...
    - operadores: +, -, *, /, %, ||, &&, typeof
    - conjunto de funciones ya hechas: esto constituye el interfaz, agrupados en distintos APIs:

        - APIs propios del Core (internos de JS)
            - funciones globales: 
                - parseInt()
                - parseFloat()
                - isNaN()
            - Métodos propios de los objetos (cuelgan de un objeto determinado unido a este mediante un punto)
                ej.:
                - elemento.toUpperCase()
                        ** cuando el elemento es de tipo string, se convierte momentáneamente en un objeto para poder aplicarle métodos propios de objetos, tras la manipulación se vuelve a convertir en elementat de tipo string.
                - aDatos.sort()
                - Wraper Objects: String, Number, Boolean
                - Object, Array, Date, RegExp, Error...
                        ** cada uno con su prototipo

                ** (Hay otros APIs que no necesita JS porque éste está restrinjido al 'entorno huésped')

        - APIs propios del Host (proporcionados por del navegador y por el servidor (NodeJS)
            - Browser:
                - Objeto Window (la ventana del navegadro) y sus propiedades -> el BOM (Browser Object Mode)
                    - window.alert()
                    - setTimeout()
                - Objeto Documento -> DOM (Document Object Mode)
                - Nuevos APIs introducidos en HTML5
                    - <video>
            - Node
                -objeto global de Node
                    - setTimeout()
