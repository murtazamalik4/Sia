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
                  <div className="marker-date"></div>
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
                  <div className="marker-date"></div>
                </div>

                <div className="history-title-holder">
                Our Transformation
                </div>
                <div className="red-highlight"></div>

                <div className="birth-text">
                <p>5 key pillars as areas to focus our efforts for the transformation required with a proper structure and governance, which should drive the success of these pillars.</p>
                {/* <ul> */}
                  <p><span className="transformPoints">Sports</span>  - We want to amplify the values of the current sports activities and enhance the positive impact it has on our members.</p>
                  <p><span className="transformPoints">Community Engagement</span> - We want to reach out and deepen relationships with the wider Indian communities, forge new partnerships with other reputable Indian organizations and strengthen existing collaboration with community leaders and institutions.</p>
                  <p><span className="transformPoints">Membership Benefits</span> - Our members are the most important asset of our Association. We will design a comprehensive membership benefits scheme to give all members access to a privileged experience. Improve and implement new programs and assistance services.</p>
                  <p><span className="transformPoints">Revenue Growth</span> – We need to ensure that SIA explores its full potential to drive revenue generation and growth opportunities through existing facilities and services.</p>
                  <p><span className="transformPoints">Better Future</span> – We need to drive this transformational roadmap to take our Association forward to the next level and to newer heights and for us to build a better and brighter future for our Singapore Indian Association.</p>
                {/* </ul> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default History;
