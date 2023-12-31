FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.2-alpine-slim
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
COPY ./nginx/. /etc/nginx/conf.d/.
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]