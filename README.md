# elizabeth_ProxyServer
This is a proxy server for the individual PetToyCo services. Currently it is setup to serve only the description_directions_attributes_ service.

## Related Projects
- https://github.com/PetToyCo/reviews
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/description_directions_attributes_
- https://github.com/PetToyCo/mainTitle_price

## Table of Contents
  1. Usage
  2. Requirements
  3. Development

## Usage
1. From the root directory: npm install
2. Make sure the description_directions_attributes_ repo is downloaded to your computer. Follow instructions in its README to install any dependencies, seed its database, and start its server.
3. From the root directory: npm start
4. Naviagate to http://127.0.0.1:3000/product?itemId=### in the browser, where ### is a number from 100 to 199, inclusive.

## Requirements
- Node 10.15.3

## Development

### Installing Dependencies
From within the root directory:
npm install

### Running Tests
From the root directory: npm test