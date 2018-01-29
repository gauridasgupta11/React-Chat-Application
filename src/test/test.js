import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from 'components/ChatApp';
import ReactTestUtils from 'react-dom/test-utils';

describe("Chat App", () => {
  beforeEach(function() {
    this.component = ReactTestUtils.renderIntoDocument(<ChatApp username="Anonymous" />);
  });

  it("renders default username", function() {
    var h3 = ReactTestUtils.findRenderedDOMComponentWithTag(
       this.component, 'h3'
    );

    expect(h3.textContent).equal("Harry");
  });
});
