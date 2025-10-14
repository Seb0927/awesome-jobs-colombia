# Guía de Contribución

Muchas gracias por tu interés en contribuir a esta lista. Esta es una guía con los lineamientos para mantener la calidad y consistencia de la misma.

## Lineamientos

Por favor, asegúrate de que tu pull request cumpla con las siguientes directrices:

- Agrega un enlace por cada Issue/PR.
  - Asegúrate de que el título del PR esté en formato `<Acción> <nombre-empresa>` Ej: `Agregar Globant`.
- Agrega el enlace en el siguiente formato: `- [nombre-empresa](https://enlace.com/) - *(LATAM) / (Colombia) / (Ciudad)*`
  - El enlace debe dirigir directamente a la página introductoria de carreras/empleos de la empresa (Donde presentan beneficios, cultura, etc.). Si la empresa no tiene una página introductoria, utiliza el enlace al tablero de puestos de trabajo.
  - La descripción debe indicar dónde ofrece puestos la empresa (LATAM, Colombia, ciudades específicas).
- Verifica que la empresa realmente ofrezca oportunidades para desarrolladores de software en Latinoamérica y/o Colombia.
- Mantén las empresas en orden alfabético dentro de su categoría correspondiente.
- Busca pull requests anteriores antes de hacer uno nuevo para verificar que la empresa que deseas añadir no ha sido ya solicitada o rechazada previamente.
- Elimina cualquier espacio en blanco al final de las líneas.
- Las empresas deben tener un historial verificable de contratación en Colombia.
- Para proponer una nueva sección:
  - Crea un nuevo issue utilizando la plantilla "Nueva sección".
  - Completa toda la información solicitada y espera la aprobación de la comunidad.
  - Si se aprueba, podrás incluir la nueva sección junto con tu contribución en el PR.

## Criterios para inclusión

- La empresa debe tener un proceso activo de contratación en Colombia (ya sea remoto o presencial).
- Debe ofrecer posiciones relacionadas con desarrollo de software o tecnología.
- El sitio web debe ser accesible y contener información sobre carreras/empleos.
- Preferiblemente empresas con buena reputación en la comunidad de desarrollo.

## Formato de las etiquetas

- *`(LATAM)`*: La empresa ofrece posiciones remotas para desarrolladores en Latinoamérica
- *`(Colombia)`*: La empresa ofrece posiciones remotas y/o posiciones en más de cinco ciudades de Colombia
- *`(<Ciudad>)`*: La empresa ofrece oportunidades laborales para una ciudad determinada

## Pasos para proponer un cambio en la lista

1. Primero crea un issue para mencionar el cambio que deseas realizar:
  - Existen plantillas para el cambio que desees proponer:
    - [Agregar una empresa](https://github.com/Seb0927/awesome-jobs-colombia/issues/new?template=agregar-empresa.md): Para solicitar la adición de una nueva empresa.
    - [Corregir una empresa](https://github.com/Seb0927/awesome-jobs-colombia/issues/new?template=corregir-empresa.md): Para reportar errores en una empresa existente.
    - [Remover una empresa](https://github.com/Seb0927/awesome-jobs-colombia/issues/new?template=remover-empresa.md): Para solicitar la eliminación de una empresa de la lista.
    - [Añadir una nueva sección](https://github.com/Seb0927/awesome-jobs-colombia/issues/new?template=nueva-seccion.md): Para proponer una nueva categoría en la lista.
    - [En blanco](https://github.com/Seb0927/awesome-jobs-colombia/issues/new?template=nueva-seccion.md): Si tu caso no se encuentra en los anteriormente mencionados.
2. Llena el formulario con los detalles solicitados en la plantilla
3. Crea la issue una vez terminada

## Pasos para realizar un cambio en la lista

> [!NOTE]
> Si solo creas una issue, podremos revisar y aplicar el cambio. Sin embargo, agradeceremos mucho si también envías un Pull Request, ya que agiliza el cambio propuesto y mejora la colaboración en este proyecto.

1. Haz fork del repositorio
2. Crea una rama nueva (`git checkout -b nombre-empresa`)
3. Realiza tus cambios
4. Ejecuta `npx awesome-lint README.md` para verificar el formato
5. Confirma tus cambios (`git commit -am 'agregar <nombre empresa>'`)
6. Envía tu rama (`git push origin agregar-nueva-empresa`)
7. Abre un Pull Request desde tu fork hacia el repositorio principal
8. Completa todos los campos requeridos en la plantilla y referencia el issue correspondiente

> [!TIP]
> Si los mantenedores solicitan cambios, no necesitas crear un nuevo PR. Simplemente:
> 1. Edita los archivos según sea necesario
> 2. Haz commit de tus cambios (`git commit -am '<cambio realizado>'`)
>    - Intenta mantener los commits atómicos: un commit por cada cambio lógico, no agrupes múltiples cambios no relacionados en un solo commit
> 3. Envía tus cambios (`git push`)
> El PR se actualizará automáticamente.

Muchas gracias por tu contribución para mantener esta lista actualizada y visible para todos.
