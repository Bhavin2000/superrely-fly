# Use Node 20 (Compatible with Helia/IPFS deps you have)
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy your s2.js and other files
COPY . .

# Open the port you are using
EXPOSE 8765

# Run the specific script from your package.json
CMD ["npm", "run", "prod"]