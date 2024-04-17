# Requerimiento técnico

Crear una aplicación web que permita a los usuarios explorar datos de Pokémon y sus evoluciones
a partir de un JSON proporcionado. Utilice litElement y JavaScript vanilla para desarrollar esta
aplicación.


# Requerimiento Funcional:

1. Mostrar una lista de Pokémon a partir de los datos del JSON de profundidad 2
proporcionado. Los datos de cada Pokémon deben incluir al menos los siguientes campos:
Nombre del Pokémon.
Tipo de Pokémon.
Imagen del Pokémon.
2. Permitir a los usuarios hacer clic en un Pokémon para ver sus evoluciones. Si un Pokémon
tiene evoluciones, se deben mostrar en una lista junto con su nombre, tipo e imagen.
3. Los usuarios deben poder navegar hacia atrás desde las evoluciones a la lista principal de
Pokémon.
4. Implementa un formulario que permita a los usuarios editar la información de las
evoluciones de los Pokémon. Aunque no es necesario guardar los cambios en un
repositorio, la aplicación debe mostrar los datos en un campo del formulario listos para
editarlos en la interfaz.
5. Debe existir un check en el formulario, que pregunte si el pokemon está repetido, si el
usuario usa este check se debe mostrar un modal en donde se le indique que puede
cambiarlo en el punto mas cercano, el modal solo es informativo.
6. Se valorara explícitamente la definición de los componentes, el uso de diferentes tipos de
componentes para cada necesidad (data manager, UI, DP)
