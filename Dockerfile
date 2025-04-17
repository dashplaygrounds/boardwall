# Stage 1: Build Angular app
FROM node:18 AS angular-build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install --save-dev --force
COPY frontend/ .
RUN npm run build

# Stage 2: Build Spring Boot app
FROM maven:3.8.5-openjdk-17 AS springboot-build
WORKDIR /app
COPY backend/pom.xml .
RUN mvn dependency:go-offline
COPY backend/ .
RUN mvn clean package -DskipTests

# Stage 3: Combine Angular and Spring Boot
FROM nginx:1.27-alpine-slim
RUN apk add openjdk17 curl iputils-ping
WORKDIR /app
COPY --from=springboot-build /app/target/*.jar boardwall.jar
COPY --from=angular-build /app/dist/boardwall/browser /usr/share/nginx/html
EXPOSE 80 8080
CMD nginx & java -jar boardwall.jar