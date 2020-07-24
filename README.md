# elizabeth_ProxyServer
This is a proxy server for PetToyCo's services. Currently it is set up to serve the 5 services listed in Related Projects.

## Related Projects
- https://github.com/PetToyCo/reviews
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/description_directions_attributes_
- https://github.com/PetToyCo/mainTitle_price
- https://github.com/PetToyCo/ProductRecommendations
- https://github.com/PetToyCo/deliver-pickup

## Table of Contents
  1. Usage
  2. Requirements
  3. Development
  4. Production

## Usage
Note: This service is currently in Production mode. To change it to development mode, please see the Production section below before proceeding.
1. From the root directory: npm install
2. Make sure the first five services in Related Projects are downloaded to your computer. Follow instructions in their respective READMEs to install any dependencies, seed databases, and start each of their servers.
3. From the root directory: npm start
4. Navigate to http://127.0.0.1:3000/product?itemID=### in the browser, where ### is a number from 100 to 199, inclusive.
5. To see specRunner tests, navigate to http://127.0.0.1:3000/specRunner.html in the browser and wait 2 seconds.

## Requirements
- Node 10.15.3

## Development

### Installing Dependencies
From within the root directory:
npm install

### Running Tests
Note: Tests will only work while proxy is in development mode.
To run the Jest suite:
From the root directory: npm run test

To run the specRunner suite:
From the root directory: npm start
Navigate to http://127.0.0.1:3000/specRunner.html in the browser and wait 2 seconds.

## Production
To return this service to development mode:
1. In index.html, uncomment lines 50-55. Then comment out lines 58-63. Uncomment lines 13-14, then comment out lines 15-16.
