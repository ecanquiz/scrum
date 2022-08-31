# Pila del Producto

>La Pila del Producto es, básicamente, una lista priorizada de requisitos funcionales o Historias de Usuario. Cosas que el usuario quiere, descritas usando la terminología del usuario. Llamamos a esto historias, o a veces simplemente elementos de la Pila.

La Pila del Producto es el inventario de funcionalidades, mejoras, tecnología y corrección de errores que deben incorporarse al producto a través de los sucesivos Sprints. En él, el Dueño del Producto, mantiene una lista actualizada de requerimientos funcionales para el software. Esta lista, representa _**«qué es lo que se pretende»**_ pero sin mencionar _**«cómo hacerlo»**_, ya que de esto último, se encargará el equipo.

Esta pila representa todo aquello que esperan el Dueño del Producto, todos los usuarios, y en general los interesados. Todo lo que suponga un trabajo que debe realizar el equipo debe estar reflejado en esta pila.

**Estos son algunos ejemplos de posibles entradas a una pila de producto**:

- Permitir a los usuarios la consulta de las obras publicadas por un determinado autor.
- Reducir el tiempo de instalación del programa.
- Mejorar la escalabilidad del sistema.
- Permitir la consulta de una obra a través de un API web.

**La Pila del Producto, es creada y modificada únicamente por el Dueño del Producto**. Durante la ceremonia de planificación, el Equipo de Desarrollo obtendrá los items del producto, que deberá desarrollar durante el Sprint y de él, partirán para generar la Pila del Sprint.

>_...“La Pila del Producto nunca está completa. La primera versión para el desarrollo, tan sólo establece los requisitos inicialmente conocidos, y que son entendidos mejor. La Pila del Producto evoluciona a medida que el producto y el entorno en el que se utilizará evoluciona. La Pila del Producto es dinámica, ya que cambia constantemente para identificar qué necesita el producto para ser adecuado, competitivo y útil...” (Scrum Guide, 2008, pág.18)_

La pila (de requisitos) del producto nunca se da por completada, al contrario, está en continuo crecimiento y evolución. Al comenzar el proyecto incluye los requisitos inicialmente conocidos y mejor entendidos, y conforme avanza el desarrollo, y evoluciona el entorno en el que será usado, se va desarrollando. En definitiva su continuo dinamismo refleja aquello que el producto necesita incorporar para ser lo más adecuado a las circunstancias, en todo momento.

Para comenzar el desarrollo se necesita la visión del objetivo del negocio que se quiere conseguir con el proyecto, comprendido y conocido por todo el equipo, y los elementos suficientes en la pila para llevar a cabo el primer Sprint.

Habitualmente se comienza a elaborar la pila con el resultado de una reunión de _“tormenta de ideas”_, o un proceso de _“exploración”_ donde colabora todo el equipo partiendo de la visión del Dueño del Producto.

El formato de la visión no es relevante. Según los casos, puede ser una presentación informal del responsable del producto, un informe de requisitos del departamento involucrado, u otros. Sin embargo, sí es importante disponer de una visión real, comprendida y compartida por todo el equipo.

El propietario del producto mantiene la pila ordenada por la importancia de los elementos, siendo los más prioritarios los que confieren mayor valor al producto, o por alguna razón resultan más necesarios, y determinan las actividades de desarrollo inmediatas.

El detalle de los requisitos en la Pila del Producto debe ser proporcional a la importancia (prioridad): Los elementos de mayor importancia deben tener mayor nivel de comprensión y detalle que los del resto. De esta forma el Equipo de Desarrollo puede descomponer un elemento de alta importancia en tareas con la precisión suficiente para ser hecho en un Sprint.

>Los elementos de la Pila del Producto que pueden ser incorporados a un Sprint se denominan “preparados” o “accionables” y son los que pueden
seleccionarse en la reunión de planificación del Sprint.

## Preparación de la Pila del Producto

Se denomina “preparación” (grooming) de la Pila del Producto a las actividades de priorización, detalle y estimación de los elementos que la
componen. Es un proceso que realizan de forma puntual, en cualquier momento, continua y colaborativa, el Dueño del Producto y el Equipo de Desarrollo. No debe consumir más del 10% de la capacidad de trabajo del equipo.

La responsabilidad de estimar el esfuerzo previsible para cada elemento, es de las personas del equipo que previsiblemente harán el trabajo.

## Formato de la Pila del Producto

El agilismo propone y prefiere la comunicación verbal o de visualización directa, a la escrita. La Pila del Producto no es un documento formal de requisitos, sino un artefacto de referencia para el equipo. La Pila del Producto, es una lista de items que representan los requerimientos funcionales esperados para el software.

Si se emplea formato de lista, es recomendable que al menos incluya la siguiente información para cada elemento:

- Id.
- Grado de Importancia.
- Descripción (de funcionalidad/requisito, denominado “Historia de Usuario”).
- Esfuerzo que demanda.
- Granulidad de los Items.
- Criterios de aceptación.
- Notas (Observación)

## Id

Es un identificador único, simplemente un número auto-incremental. Esto nos permite no perder la pista a las historias cuando cambiamos su nombre.

## Grado de Importancia

Los items de la Pila del Producto, deben guardar un orden de importancia y para que el Dueño del Producto logre establecer el Grado de Importancia, debe apoyarse en la siguiente base:

- Riesgos de implementarla.
- Coherencia con los intereses del negocio.
- Beneficios de implementar una funcionalidad.
- Valor diferencial con respecto a productos de la competencia.
- Pérdida o costo que demande posponer la implementación de una funcionalidad.

El grado de importancia que el Dueño del Producto le da a la Historia de Usuario debe ser, que mientras más alto es, igual a más importante.

>**Henrik Kniberg**: _Suelo evitar el término “prioridad” porque típicamente “1” se considera la máxima prioridad, lo que es muy incómodo si posteriormente se decide que algo es más importante. ¿Qué prioridad le daríamos a ese nuevo elemento? ¿Prioridad 0? ¿Prioridad -1?_

Todos los elementos importantes deberían tener diferentes grados de importancia asignados. En realidad, da igual si los elementos menos importantes
tienen todos el mismo valor, ya que probablemente no se discutirán durante la planificación de Sprint en cualquier caso.

Cualquier historia sobre la que el Dueño del Producto piense que tiene una remota posibilidad de incluirse en el Sprint debería tener un nivel de importancia único definido. El grado de importancia se emplea solo para ordenar los elementos por relevancia. Así que si el elemento A tiene una importancia de 20 y el elemento B una importancia de 100, simplemente significa que B es más importante que A. No significa que B sea cinco veces más importante que A. Si B tuviera una importancia de 21, ¡aun significaría lo mismo! Es útil dejar espacio entre la secuencia de números por si aparece un elemento C que es más importante que A pero menos importante que B. Por supuesto, le podríamos dar un grado de importancia de 20,5 a C, pero en vez de ello se aconseja dejar espacio entre números.

Otras personas aparte del Dueño del Producto pueden añadir sus historias a la Pila de Producto. Pero no pueden asignarles niveles de importancia, ese es un cometido exclusivo del Dueño del Producto. Tampoco pueden establecer estimaciones, ese es un cometido exclusivo del equipo.

## Descripción

>Consiste en la descripción breve de la funcionalidad (requisito), denominada “Historia de Usuario”.

Se trata de una descripción corta de la historia, suficientemente clara como para que el Dueño del Producto comprenda aproximadamente de qué estamos hablando, y suficientemente clara como para distinguirla de las otras historias.

Normalmente, 2 a 10 palabras.

Por ejemplo: **_“Visualizar historial de transacciones”_**.

D) Esfuerzo que demanda


