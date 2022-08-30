# Historias Técnicas

Las Historias Técnicas o elementos no-funcionales consiste en cosas que deben hacerse pero que no son un entregable ni están directamente relacionadas con ninguna historia específica, y no son de valor inmediato para el Dueño del Producto.

Por ejemplo:

- Instalar un servidor de compilación continua.
- Refactorizar la capa de acceso a datos.
- Escribir una descripción general del diseño.

>¿Son historias en el sentido normal? ¿O son tareas que no están conectadas a ninguna historia específica? ¿Quién las prioriza? ¿Debería involucrarse el Dueño del Producto en estos asuntos?

Se ha experimentado mucho con diferentes maneras de manejar las Historias Técnicas. Esto no funciona muy bien, ya que cuando el Dueño del Producto prioriza la Pila de Producto es como comparar peras con manzanas. De hecho, por razones obvias, las historias técnicas obtienen siempre mínima prioridad con razonamientos del tipo: _“sí, seguro que la compilación continua es muy importante y todo eso, pero construyamos primero algo que nos permita facturar, ¿ok?”_

En algunos casos el Dueño del Producto tiene razón, pero a menudo no es así, ya que el Dueño del Producto no siempre está cualificado para manejar estos compromisos. Así que se recomienda:

1. Intentar evitar las Historias Técnicas y buscar efusivamente formas de transformar estas en Historias de Usuario con valor de negocio mensurable. Así el Dueño del Producto tendrá mejores oportunidades para realizar decisiones correctas entre los pro y los contra.
2. Si no se puede transformar una Historia Técnica en una Historia de Usuario, intentar ver si es posible hacerla como una tarea dentro de otra historia. Por ejemplo, “refactorizar la capa de acceso a datos” podría ser una tarea dentro de la historia “editar usuario”, ya que esto involucra utilizar la capa de acceso a datos.
3. Si lo anterior falla, definirla como Historia Técnica y mantener una lista separada con dichas historias. Permitimos al Dueño del Producto que vea dicha lista, pero no que la modifique. Usamos los factores de dedicación y la velocidad estimada para negociar con el Dueño del Producto y sacar algo de tiempo del Sprint para implementar estas historias.
4. Otra opción es simplemente mantener al Dueño del Producto fuera del ciclo o darle un factor de dedicación no negociable. Pero no hay excusa para no intentar llegar a un consenso primero. Si el Dueño del Producto es una persona razonable, se debe sugerir mantener lo más informado posible y
permitirle establecer las prioridades generales. Ya que la transparencia es uno de los valores principales.

4) Otra opción es simplemente mantener al Dueño del Producto fuera del ciclo
o darle un factor de dedicación no negociable. Pero no hay excusa para no
intentar llegar a un consenso primero. Si el Dueño del Producto es una
persona razonable, se debe sugerir mantener lo más informado posible y
permitirle establecer las prioridades generales. Ya que la transparencia es
uno de los valores principales.

:::tip Ejemplo:
➔ **Henrik Kniberg**: _“un diálogo muy similar a este ocurrió durante una de nuestras reuniones de planificación de Sprint...”_
- **Equipo**: _“Tenemos algunos asuntos técnicos internos que deben hacerse. Nos gustaría presupuestar un 10% de nuestro tiempo para ello, es decir, reducir el factor de dedicación del 75% al 65%. ¿Le parece bien?”._
- **Usuario**: _“¡No tenemos tiempo!”._
- **Equipo**: _“Bueno, mira el ultimo Sprint. Nuestra velocidad estimada fue 80, y la velocidad real fue de 30, ¿correcto?”._
- **Usuario**: _“¡Exacto! ¡Así que no tenemos tiempo para asuntos técnicos internos! ¡Tenemos que añadir nuevas funcionalidades!”._
- **Equipo**: _“Bueno, la razón por la que nuestra velocidad fue tan mala fue que pasamos demasiado tiempo intentando conseguir versiones consistentes para probar”._
- **Usuario**: _“Sí, ¿Y?”._
- **Equipo**: _“Así que proponemos dedicar un 10% de nuestro tiempo del Sprint para implementar un servidor de compilación continua y otras cosas que nos ayudarán a hacer la integración menos penosa. Esto incrementará nuestra velocidad al menos un 20% para los próximos Sprints, ¡para siempre!”._
- **Usuario**: _“¿En serio? ¿Y por qué no lo hicimos en el último Sprint entonces?”._
- **Equipo**: _“Eh...porque no querías que lo hiciéramos...”._
- **Usuario**: _“Oh, um, bueno, vale, parece una buena idea hacerlo ahora entonces...”._
:::
