import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="##e8f4f8"
      className="text-center text-dark-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-dark-between p-4 border-bottom">
        <div>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" dark="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="3" dark="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>

              <p>
                <a href="/orderHistory" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="/help" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 9999999912
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 7999921221
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "#c1e1ec" }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="/">
          iBook
        </a>
      </div>
    </MDBFooter>
  );
}
