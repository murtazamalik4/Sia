import React from "react";
import "./gallery.css";
import { Image } from "antd";
import { Col, Row } from "antd";

function gallery() {
  return (
    <>
      <div className="events_component_1">
        <div className="events_1">
          <h1>GALLARY</h1>
        </div>
        <div className="events_2">HOME - Gallary</div>
      </div>

      <div className="gallery-container">
        <div className="gallery_main">
          <Row className="gallery-imgs-row" gutter={8}>
            <Col span={12}>
              <Row gutter={8}>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
              </Row>
              <Row gutter={8} style={{ marginTop: 8 }}>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Image
                className="large_img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              /></Col>
          </Row>
          <Row className="gallery-imgs-row" gutter={8} style={{ marginTop: 8 }}>
            <Col span={12}>
              <Image
                className="large_img"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              /></Col>
            <Col span={12}>
              <Row gutter={8}>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
              </Row>
              <Row gutter={8} style={{ marginTop: 8 }}>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={12}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

    </>
  );
}

export default gallery;
