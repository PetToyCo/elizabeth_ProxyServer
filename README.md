# elizabeth_ProxyServer
This is a proxy server for the individual PetToyCo services. Currently it is setup to serve only the description_directions_attributes_ service.

## Related Projects
- https://github.com/PetToyCo/reviews
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/description_directions_attributes_
- https://github.com/PetToyCo/mainTitle_price
- https://github.com/PetToyCo/ProductRecommendations

## Table of Contents
  1. Usage
  2. Requirements
  3. Development

## Usage
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
To run the Jest suite:
From the root directory: npm run test

To run the specRunner suite:
From the root directory: npm start
Navigate to http://127.0.0.1:3000/specRunner.html in the browser and wait 2 seconds.
