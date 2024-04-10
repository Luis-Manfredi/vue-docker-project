# Usa la imagen de node como base
FROM node:14-alpine as build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Segunda etapa del Dockerfile
FROM nginx:alpine

# Copia los archivos construidos desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración opcional para Nginx (puedes personalizar según tus necesidades)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para que la aplicación sea accesible desde fuera del contenedor
EXPOSE 80

# Comando para iniciar Nginx en primer plano cuando el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]