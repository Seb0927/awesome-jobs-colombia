# Guía de Contribución

Muchas gracias por tu interés. Esta guía detalla los lineamientos para contribuir a la lista.

## Requisitos de Inclusión
- Empresas con un proceso activo de contratación en Colombia (remoto o presencial).
- Puestos relacionados con desarrollo de software o tecnología.
- Página web pública con información sobre empleos.

## Formato Requerido
Mantén las empresas en orden alfabético según su categoría y usa este formato:
`- [Nombre Empresa](https://enlace-empleos.com/) - *(LATAM) / (Colombia) / (Ciudad)*`

Etiquetas:
- `(LATAM)`: Trabajos remotos para toda Latinoamérica.
- `(Colombia)`: Trabajos remotos para Colombia o presenciales en más de 5 ciudades.
- `(<Ciudad>)`: Oportunidades exclusivas en una ciudad específica.

## Cómo Contribuir

Puedes proponer cambios mediante un Issue o un Pull Request (PR).

### Opción 1: Crear un Issue
1. Ve a la sección de [Issues](https://github.com/Seb0927/awesome-jobs-colombia/issues/new/choose) del repositorio.
2. Selecciona la plantilla adecuada (Agregar, Corregir o Remover empresa).
3. Llena la información solicitada y crea el issue.

### Opción 2: Enviar un Pull Request
1. Haz un fork del repositorio y crea una rama (`git checkout -b agregar-empresa`).
2. Agrega la empresa respetando la categoría y el orden alfabético.
3. Ejecuta `npx awesome-lint README.md` para verificar el formato.
4. Haz commit y push de los cambios:
   ```bash
   git commit -m "Agregar <Nombre Empresa>"
   git push origin agregar-empresa
   ```
5. Abre el Pull Request y sigue las instrucciones de la plantilla.
