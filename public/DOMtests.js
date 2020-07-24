const { expect } = chai;

describe('Proxy Server Basic Setup', () => {
  it('should have an element with id "description"', () => {
    var description = iframeDOM.getElementById('description');
    expect(description).to.not.be.null;
  });

  it('should have an element with id "REVIEWS_ATTACH_POINT"', () => {
    var reviews = iframeDOM.getElementById('REVIEWS_ATTACH_POINT');
    expect(reviews).to.not.be.null;
  });

  it('should have an element with id "gallery"', () => {
    var gallery = iframeDOM.getElementById('gallery');
    expect(gallery).to.not.be.null;
  });

  it('should have an element with id "mainTitleMount"', () => {
    var mainTitle = iframeDOM.getElementById('mainTitleMount');
    expect(mainTitle).to.not.be.null;
  });

  it('should have an element with id "RECOMMENDATIONS_CUSTOMER_ATTACH_POINT"', () => {
    var recommendations = iframeDOM.getElementById('RECOMMENDATIONS_CUSTOMER_ATTACH_POINT');
    expect(recommendations).to.not.be.null;
  });

  it('should have an element with id "RECOMMENDATIONS_TREAT_ATTACH_POINT"', () => {
    var treat = iframeDOM.getElementById('RECOMMENDATIONS_TREAT_ATTACH_POINT');
    expect(treat).to.not.be.null;
  });

  it('should have an element with id "RECOMMENDATIONS_PET_ATTACH_POINT"', () => {
    var pet = iframeDOM.getElementById('RECOMMENDATIONS_PET_ATTACH_POINT');
    expect(pet).to.not.be.null;
  });

  it('should have an element with id "itemAvailability"', () => {
    var deliver = iframeDOM.getElementById('itemAvailability');
    expect(deliver).to.not.be.null;
  });

  it('should have an element with id "MODAL_ATTACH_POINT"', () => {
    var modal = iframeDOM.getElementById('MODAL_ATTACH_POINT');
    expect(modal).to.not.be.null;
  });
});

describe('Proxy Server Service Loading', () => {
  //gallery
  it('should have a div from the gallery service with className "galleryZoomIconAndText"', () => {
    var div = iframeDOM.getElementsByClassName('galleryZoomIconAndText')[0];
    expect(div).to.not.be.null;
  });

  it('should display information from the db for item 105 in the gallery service', () => {
    var div = iframeDOM.getElementsByClassName('galleryMainImage')[0];
    var { src } = div;
    expect(src).to.not.be.null;
  });

  //description
  it('should have a button from the description service with id "directionsB"', () => {
    var button = iframeDOM.getElementById('directionsB');
    expect(button).to.not.be.null;
  });

  it('should display information from the db for item 105 in the description service', () => {
    var div = iframeDOM.getElementById('descriptionTab');
    var { innerHTML } = div;
    expect(innerHTML).to.contain('IpsumLorem Plush Bunny with Squeaker');
  });

  //reviews
  it('should have a div from the reviews service with id "average-review-stars"', () => {
    var div = iframeDOM.getElementById('average-review-stars');
    expect(div).to.not.be.null;
  });

  it('should display information from the db for item 105 in the reviews service', () => {
    var span = iframeDOM.getElementById('item-value-reviews');
    var { innerHTML } = span;
    expect(innerHTML).to.equal('16');
  });

  //mainTitle
  it('should have a div from the mainTitle service with id "title"', () => {
    var div = iframeDOM.getElementById('title');
    expect(div).to.not.be.null;
  });

  it('should display information from the db for item 105 in the mainTitle service', () => {
    var div = iframeDOM.getElementById('title');
    var { innerHTML } = div;
    expect(innerHTML).to.equal('IpsumLorem Plush Bunny with Squeaker, 6" X 4.5"');
  });

  //recommendations
  it('should have a div from the recommendations service with id "recommendation-submodule-treat"', () => {
    var div = iframeDOM.getElementById('recommendation-submodule-treat');
    expect(div).to.not.be.null;
  });

  it('should display information from the db for item 105 in the recommendations service', () => {
    var div = iframeDOM.getElementById('PR-price-180');
    var { innerHTML } = div;
    expect(innerHTML).to.equal('$39.16');
  });

    //deliver
    it('should have a div from the recommendations service with className "deliveryPickupContainers"', () => {
      var divs = iframeDOM.getElementsByClassName('deliveryPickupContainers');
      expect(divs).to.not.be.null;
    });
  
    it('should display information from the db for item 105 in the delivery service', () => {
      var divs = iframeDOM.getElementsByClassName('deliverPickupItemPrice')[0];
      var { innerHTML } = divs;
      expect(innerHTML).to.not.be.null;
    });
});
