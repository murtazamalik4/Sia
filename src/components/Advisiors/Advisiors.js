import React from 'react'
import './Advisiors.css'
import { Image } from "antd";
import { Col, Row } from "antd";

function Advisiors() {
    return (
        <div>
            <div className="events_component_1">
                <div className="events_1">
                    <h1>OUR TEAM</h1>
                </div>
                <div className="events_2">HOME - Our Team</div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "60vw", margin: "auto", marginTop: "90px" }}>

                <div className='membership_head'> ADVISIORS</div>
                <hr />
                <div className='membership_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.</div>
            </div>


            <div className='advisiories_card'>
                <div className="team" >
                    <img className="profile" src="images/team2.png" alt="" />
                    <div className="team_2">
                        <div className="name">Wade Warren</div>
                        <div className="position">CO-FOUNDER</div>
                        <div className="explain">
                            Loreum ipsum is dummy text.Loreum ipsum is dummy text. Loreum
                            ipsum is dummytext. Loreum ipsum is dummy text.
                        </div>
                    </div>
                    <div className="icons">
                        <div className="facebook">
                            <img src="images/facebook.png" alt="" />
                        </div>
                        <div className="twitter">
                            <img src="images/twitter.png" alt="" />
                        </div>
                        <div className="insta">
                            <img src="images/instagram.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="team" >
                  <img className="profile" src="images/team2.png" alt="" />
                  <div className="team_2">
                    <div className="name">Wade Warren</div>
                    <div className="position">CO-FOUNDER</div>
                    <div className="explain">
                      Loreum ipsum is dummy text.Loreum ipsum is dummy text. Loreum
                      ipsum is dummytext. Loreum ipsum is dummy text.
                    </div>
                  </div>
                  <div className="icons">
                    <div className="facebook">
                      <img src="images/facebook.png" alt="" />
                    </div>
                    <div className="twitter">
                      <img src="images/twitter.png" alt="" />
                    </div>
                    <div className="insta">
                      <img src="images/instagram.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="team" >
                  <img className="profile" src="images/team2.png" alt="" />
                  <div className="team_2">
                    <div className="name">Wade Warren</div>
                    <div className="position">CO-FOUNDER</div>
                    <div className="explain">
                      Loreum ipsum is dummy text.Loreum ipsum is dummy text. Loreum
                      ipsum is dummytext. Loreum ipsum is dummy text.
                    </div>
                  </div>
                  <div className="icons">
                    <div className="facebook">
                      <img src="images/facebook.png" alt="" />
                    </div>
                    <div className="twitter">
                      <img src="images/twitter.png" alt="" />
                    </div>
                    <div className="insta">
                      <img src="images/instagram.png" alt="" />
                    </div>
                  </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "60vw", margin: "auto", marginTop: "90px" }}>

            <div className='membership_head'>DIRECTORS</div>
            <hr />
            <div className='membership_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.</div>
            </div>

            <div style={{width:"80vw" , margin:"auto", marginTop:"50px"}}>
            <img style={{width:"100%",height:"509px"}} 
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt=""
                  />
            </div>

            <Row gutter={[16, 16]} className="Advisiories_row">
            <Col span={8}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={8}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={8}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>

                <Col span={8}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={8}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={8}>
                  <Image
                    className="small_img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
            </Row>

        </div>
    )
}

export default Advisiors