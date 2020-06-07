# Script auto-completador de templates

Script que recibe como input una ruta hacia un archivo CSV y otra ruta hacia un template HTML. Una vez obtenidas, autocompleta los valores de cada fila del CSV dentro del template y genera un nuevo archivo en la ruta `export/`

## Recursos y tecnologías utilizadas:

- NodeJs
- Node File System (FS)
- [csv-parser](https://www.npmjs.com/package/csv-parser)
- [jsdom](https://www.npmjs.com/package/jsdom)
- [prompt-sync](https://www.npmjs.com/package/prompt-sync)

## Uso

#### 1 - Ejecutar el script

`node script.js`

#### 2 - Ingresar ruta de CSV

El script solicitará una ruta para el archivo CSV. Se pueden ingresar rutas relativas o absolutas.

`Write database route: example\test_db.csv`

#### 3 - Ingresar ruta de template HTML

El script solicitará una ruta para el archivo HTML. Se pueden ingresar rutas relativas o absolutas.

`Write template html file route: example\template.html`

#### 4 - Listo

Se notificará por terminal cuando esté completo el proceso indicando la ruta de salida de los archivos (por default `export/`)

---

# Template autocompleter Script

It's a script that takes a CSV file route and an HTML file as a template. Once received, it autocompletes specific tags within the HTML and outputs a new file for each CSV row into the `export/` folder.

## Resources and technologies used:

- NodeJs
- Node File System (FS)
- [csv-parser](https://www.npmjs.com/package/csv-parser)
- [jsdom](https://www.npmjs.com/package/jsdom)
- [prompt-sync](https://www.npmjs.com/package/prompt-sync)

## Usage

#### 1 - Run the script with node

`node script.js`

#### 2 - Input CSV route

The script will prompt the user to input a route for the CSV file. Both relative and absolute paths can be used.

`Write database route: example\test_db.csv`

#### 3 - Input HTML Template route

The script will prompt the user to input a route for the HTML template file. Both relative and absolute paths can be used.

`Write template html file route: example\template.html`

#### 4 - Done!

The terminal will notify once the process is done indicating the output route (by default `export/`)
