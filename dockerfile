FROM alpine:3.15.0
WORKDIR /app

RUN apk add --no-cache chromium nss freetype harfbuzz ca-certificates ttf-freefont nodejs npm

ARG PORT 
ENV PORT=$PORT PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser 
ENV RAILWAY_DOCKERFILE_PATH = Dockerfile.origin

COPY package*.json ./
RUN npm install

COPY . .
CMD npm run start