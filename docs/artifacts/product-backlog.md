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

## Esfuerzo que demanda

A diferencia de las metodologías tradicionales, Scrum, propone la estimación de esfuerzo y complejidad que demanda el desarrollo de las funcionalidades, solo para aquellas cuyo orden sea prioritario.

Estas estimaciones, no se efectúan sobre items poco prioritarios ni tampoco sobre aquellos donde exista un alto grado de incertidumbre. De esta manera, se evita la pérdida de tiempo en estimaciones irrelevantes, postergándolas para el momento en el cual realmente sea necesario comenzar a desarrollarlas.

>_“El equipo da al Dueño del Producto las estimaciones del esfuerzo requerido para cada elemento de la Pila del Producto. Además, el Dueño del Producto es responsable de asignar una estimación del valor del negocio a cada elemento individual. Esto es normalmente una práctica desconocida para el Dueño del Producto. Por esa razón, a veces el Gestor del Proyecto puede enseñar al Dueño del Producto a hacerlo.”_ (The Scrum Primer, 2009, pág. 8)

## Granulidad de los Items

Los items de la Pila del Producto no necesariamente deben tener una granulidad pareja. Es posible encontrar ítems tales como _"es necesario contar con un módulo de control de stock y logística"_ o uno tan pequeño como _"Modificar el color de fondo de los mensajes de error del sistema, de negro a rojo"_.

>_“... Los Ítems de tan baja granulidad, suelen agruparse en un formato denominado «Historias de Usuario» mientras que los de alta granulidad,
suelen llamarse «temas». Cuando los elementos de la Pila del Producto han sido preparados con este nivel de granularidad, los que están en la parte
superior del mismo (los de mayor prioridad, y mayor valor) se descomponen para que quepan en un Sprint...”_ (Scrum Guide, 2008, pág.19)

## Criterios de Aceptación

Es recomendable que cada ítem de la Pila del Producto, especifique cuales son los criterios de aceptación (o prueba de aceptación que debe superar), para considerar cumplido el requisito.

Los criterios de aceptación, entonces, no son más que _“pautas”_ o pequeñas _“reglas”_ que una Historia de Usuario debe respetar para considerarla cumplida.

Por ejemplo, para la Historia de Usuario _«Como administrador del sistema necesito agregar productos al catálogo»_, los criterios de aceptación podrían ser:

- Cada producto debe contener:
    - código de producto (opcional).
    - descripción de hasta 500 caracteres (opcional).
    - precio (obligatorio).
    - stock inicial (opcional).
    - un nombre (obligatorio).
    - una foto (opcional).
- No pueden existir dos productos con el mismo nombre de producto o código de producto.
- El nombre del producto jamás puede estar vacío o tener menos de 3 caracteres.
- Cuando no se asigne un stock inicial al producto, éste debe asignarse automáticamente en cero (sin stock).

>_“... Las Pruebas de Aceptación se utilizan a menudo como un atributo más de la Pila del Producto. A menudo pueden sustituir a descripciones de texto más detalladas, que contengan una descripción comprobable, de lo que el elemento de la Pila del Producto debe hacer cuando esté completado...”_ (Scrum Guide, 2008, pág.19)

## Notas (Observación)

Colocamos cualquier otra información, clarificación, referencia a otras fuentes de información, etc. Normalmente muy breves.

## Campos adicionales del formato

A veces se utiliza campos adicionales en la Pila del Producto, fundamentalmente como comodidad para el Dueño del Producto a la hora de decidir sus prioridades. Dependiendo del tipo de proyecto, funcionamiento del equipo y la organización, pueden ser aconsejables otros campos:

- Persona asignada.
- N° de Sprint en el que se realiza.
- Módulo del sistema al que pertenece.
- Solicitante.
- Entre otros.

## Los formatos deben ser flexibles

Es preferible no adoptar formatos rígidos, ya que los resultados del agilismo no dependen de las formas, sino de la institucionalización de sus principios y la implementación adecuada a las características de la empresa y del proyecto. He aquí un sencillo ejemplo de Pila del Producto:

|Importancia|Descripción|Esfuerzo|Elaborado por|
|:-:|:-|:-:|:-:|
|90|Plataforma tecnológica|XL|A.R.|
|70|Interfaz de usuario|L|L.M.|
|60|Un usuario se registra en el sistema|S|C.C.|
|40|El operador define el flujo y textos de un expediente|S|J.H.|
|30|xxx|M|A.R.|

Mantenemos esta tabla en una Hoja de Cálculo con _“compartir”_ habilitado (es decir, muchos usuarios pueden editar simultáneamente la hoja). Oficialmente, el Dueño del Producto es el propietario del documento, pero no queremos dejar al resto de usuarios fuera. Muchas veces un desarrollador necesita abrir el documento para clarificar algo o cambiar una estimación de esfuerzo.

Por la misma razón, no se coloca este documento en el repositorio de control de versiones; en vez de eso, lo almacenamos en una unidad de red compartida. Esta ha demostrado ser la manera más simple de permitir múltiples editores diferentes sin causar problemas de bloqueo o fusión de documentos. Sin embargo, casi todos los demás artefactos se colocan en el repositorio de control de versiones.


