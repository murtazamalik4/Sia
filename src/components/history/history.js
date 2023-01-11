import "./history.css";
import { Col, Row } from "antd";

function History() {
  return (
    <>
      <div className="events_component_1">
        <div className="events_1">
          <h1>About Us</h1>
        </div>
        <div className="events_2">HOME - About Us</div>
      </div>

      <div>
        <Row className="birth-section-container">
          <Col xs={24} lg={12} className="birth-image-container">
            <img
              className="birth-img-holder"
              src="/assets/images/history-demo-image.png"
              alt=""
            />
          </Col>

          <Col xs={24} lg={12}>
            <div className="birth-text-holder">
              <div className="marker-container">
                <div className="marker">
                  <div className="marker-date">1923</div>
                </div>

                <div className="history-title-holder">
                  The Birth of<br></br>the Association
                </div>
                <div className="red-highlight"></div>

                <div className="birth-text">
                Singapore Indian Association was formed as an ethnic sports club established in 1923 to serve our Indian communities and to promote the social, physical, intellectual, cultural and general welfare of its members. The journey over the past 99 years has seen SIA face challenges in its management and administration and has faded in its true identify in serving its members and communities adequately and to its purpose.
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="birth-section-container margin-bottom-extra">
          <Col xs={{ order: 3, span: 24 }} lg={{ order: 2, span: 12 }}>
            <div className="birth-text-holder">
              <div className="marker-container">
                <div className="marker">
                  <div className="marker-date">2008</div>
                </div>

                <div className="history-title-holder">
                Our Vision
                </div>
                <div className="red-highlight"></div>

                <div className="birth-text">
                For Singapore Indian Association to regain its image, reputation and transform its identity as a respectable and responsible association for its members and the Indian community.
                </div>
              </div>
            </div>
          </Col>

          <Col
            xs={{ order: 2, span: 24 }}
            lg={{ order: 3, span: 12 }}
            className="birth-image-container"
          >
            <img
              className="birth-img-holder"
              src="/assets/images/history-demo-image.png"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default History;
