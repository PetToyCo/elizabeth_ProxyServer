const { expect } = chai;

describe('Proxy Server', () => {
  it('should have an element with id "description"', () => {
    var description = iframeDOM.getElementById('description');
    expect(description).to.not.be.null;
  })
});