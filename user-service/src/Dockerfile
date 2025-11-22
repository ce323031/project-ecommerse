# Dockerfile
# 1. Pakai base image Node.js
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json dan package-lock.json dulu (cache npm install)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy semua source code
COPY . .

# 6. Expose port sesuai .env (default 3000)
EXPOSE 3000

# 7. Jalankan server
CMD ["npm", "run", "dev"]
