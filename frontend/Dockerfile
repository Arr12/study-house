# Use the official Node.js image as the base image
FROM node:18

# Set working directory
WORKDIR /src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

