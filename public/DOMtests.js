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
  })

  //description
  it('should have a button from the description service with id "directions"', () => {
    var button = iframeDOM.getElementById('directions');
    expect(button).to.not.be.null;
  });

  //reviews
  it('should have a div from the reviews service with id "average-review-stars"', () => {
    var div = iframeDOM.getElementById('average-review-stars');
    expect(div).to.not.be.null;
  });
});