# Guía de Contribución

¡Gracias por tu interés en contribuir a Awesome Jobs Colombia! Esta es una guía con lineamientos para mantener la calidad y consistencia de la lista.

## Lineamientos

Por favor, asegúrate de que tu pull request cumpla con las siguientes directrices:

- Agrega un enlace por cada Pull Request.
  - Asegúrate de que el título del PR esté en formato `Agregar <nombre-empresa>`.
  - Explica de manera concisa por qué la empresa es relevante para desarrolladores en Colombia.
- Agrega el enlace en el siguiente formato: `- [nombre-empresa](https://enlace.com/) - *(LATAM) / (Colombia) / (Ciudad)*`
  - El enlace debe dirigir directamente a la página introductoria de carreras/empleos de la empresa (Donde presentan beneficios, cultura, etc.). Si la empresa no tiene una página introductoria, utiliza el enlace al tablero de puestos de trabajo.
  - La descripción debe indicar dónde ofrece puestos la empresa (LATAM, Colombia, ciudades específicas).
    - Si la empresa ofrece puestos en mas de cinco ciudades de Colombia, solamente utilizar la etiqueta `(Colombia)`
- Para proponer una nueva sección:
  - Crea un nuevo issue utilizando la plantilla "Nueva sección".
  - Completa toda la información solicitada y espera la aprobación de la comunidad.
  - Si se aprueba, podrás incluir la nueva sección junto con tu contribución en el PR.
- Verifica que la empresa realmente ofrezca oportunidades para desarrolladores de software en Latinoamérica y/o Colombia.
- Mantén las empresas en orden alfabético dentro de su categoría correspondiente.
- Busca pull requests anteriores antes de hacer uno nuevo para verificar que la empresa que deseas añadir no ha sido ya solicitada o rechazada previamente.
- Revisa tu ortografía y gramática.
- Elimina cualquier espacio en blanco al final de las líneas.
- Las empresas deben tener un historial verificable de contratación en Colombia.

## Criterios para inclusión

- La empresa debe tener un proceso activo de contratación en Colombia (ya sea remoto o presencial).
- Debe ofrecer posiciones relacionadas con desarrollo de software o tecnología.
- El sitio web debe ser accesible y contener información sobre carreras/empleos.
- Preferiblemente empresas con buena reputación en la comunidad de desarrollo.

## Formato de las etiquetas

- *`(LATAM)`*: La empresa ofrece posiciones remotas para desarrolladores en Latinoamérica
- *`(Colombia)`*: La empresa ofrece posiciones remotas y/o posiciones en más de cinco ciudades de Colombia
- *`(<Ciudad>)`*: La empresa ofrece oportunidades laborales para una ciudad determinada

## Uso de issues

Para mantener una mejor organización, utilizamos issues para diferentes tipos de contribuciones:

- **Nueva sección**: Para proponer una nueva categoría en la lista.
- **Nueva empresa**: Para solicitar la adición de una nueva empresa.
- **Corregir empresa**: Para reportar errores en una empresa existente.
- **Remover empresa**: Para solicitar la eliminación de una empresa de la lista.

Cada tipo de issue tiene su propia plantilla con los campos necesarios a completar.

## Proceso de Pull Request

1. Primero crea un issue para discutir el cambio que deseas realizar
2. Haz fork del repositorio
3. Crea una rama nueva (`git checkout -b nombre-empresa`)
4. Realiza tus cambios
5. Ejecuta `npx awesome-lint` para verificar el formato
6. Confirma tus cambios (`git commit -am 'agregar <nombre empresa>'`)
7. Envía tu rama (`git push origin agregar-nueva-empresa`)
8. Abre un Pull Request desde tu fork hacia el repositorio principal
9. Completa todos los campos requeridos en la plantilla y referencia el issue correspondiente

## Actualizar un Pull Request

Si los mantenedores solicitan cambios, no necesitas crear un nuevo PR. Simplemente:

1. Edita los archivos según sea necesario
2. Haz commit de tus cambios (`git commit -am '<cambio realizado>'`)
   - Intenta mantener los commits atómicos: un commit por cada cambio lógico, no agrupes múltiples cambios no relacionados en un solo commit
3. Envía tus cambios (`git push`)

El PR se actualizará automáticamente.

Gracias por tu contribución para hacer más visible las oportunidades laborales para desarrolladores en Colombia
