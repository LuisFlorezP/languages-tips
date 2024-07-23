@REM Actualizar transpilación de TS a JS automática
$ tsc -w

@REM Generar plantilla base del archivo tsconfig.json 
$ tsc --init

@REM Versión de Node
$ node --version

@REM Correr directamente un archivo JS
$ node <file-name>

@REM Iniciar archivo package json personalizado
$ npm init

@REM Iniciar archivo package json estandar
$ npm init -y

@REM Instalar node_modules (dependencias) 
$ npm i

@REM Instalar dependencia específica 
$ npm i <dependency>

@REM Instalar dependencia con versión específica: 
$ npm i <dependency>@<version>

@REM Desinstalar dependencia específica
$ npm un <dependency>

@REM Visualizar las diferentes versiones de node
$ nvm list

@REM Usar una versión en específico de node
$ nvm use <version>

@REM Instalar una versión en específico de node
$ nvm install <version>