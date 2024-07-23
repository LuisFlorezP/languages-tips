@REM Actualizar transpilación de TS a JS automática
$ tsc -w

@REM Generar plantilla base del archivo tsconfig.json 
$ tsc --init

@REM Versión de TS
$ tsc --version

@REM Usar dependencia para correr directamente un archivo TS
$ ts-node <file-name>