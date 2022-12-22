import React, { useState } from 'react'
import './Membership.css'
import { Link } from 'react-router-dom'
import { Radio } from 'antd';


function Membership() {

  const [ordinaryMan, setOrdinaryMan] = useState(true);
  const [associateMan, setAssociateMan] = useState(true);


  const onChangeOrdinary = (e) => {
    console.log(`radio checked:${e.target.value}`);
    console.log(!ordinaryMan)
    setOrdinaryMan(!ordinaryMan)
  };
  const onChangeAssociate = (e) => {
    console.log(`radio checked:${e.target.value}`);
    console.log(!associateMan)
    setAssociateMan(!associateMan)
  };

  return (
    <div>
      <div className="events_component_1">
        <div className="events_1">
          <h1>MEMBERSHIP</h1>
        </div>
        <div className="events_2">HOME - Membership</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "60vw", margin: "auto", marginTop: "90px" }}>

        <div className='membership_head'> We'd love to have you!</div>
        <hr />
        <div className='membership_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.</div>
      </div>

      <div className="SIA_membership">
        <div className="card">
          <div className="card_head">
            Junior Member
          </div>
          <div style={{ height: "40px" }}>

          </div>
          <div style={{
            paddingTop: "34px", fontWeight: "400",
            fontSize: "12px"
          }}>STARTS AT*</div>
          <div className="card_money">
            $5/month
          </div>

          <ul>
            <li> above 12 years - 18 years </li>
          </ul>
          <hr className='membership_hr' />
          <Link to="/MembershipForm"><button>BE A MEMBER</button></Link>
        </div>
        <div className="card">
          <div className="card_head">
            Ordinary Member
          </div>
          <Radio.Group style={{ width: "100%" }} onChange={onChangeOrdinary} defaultValue="ordinary_man">
            <Radio.Button style={{ width: "50%", padding: "3px 0px", display: "inline-flex", height: "40px", justifyContent: "center" }} value="ordinary_man">Man</Radio.Button>
            <Radio.Button style={{ width: "50%", padding: "3px 0px", display: "inline-flex", height: "40px", justifyContent: "center" }} value="ordinary_lady">Lady</Radio.Button>
          </Radio.Group>

          <div style={{
            paddingTop: "34px", fontWeight: "400",
            fontSize: "12px"
          }}>STARTS AT*</div>
          {ordinaryMan ?
            <>
              <div className="card_money">
                $30/month
              </div>
              <ul>
                <li> 6 months upfront payment </li>
              </ul>
            </> :
            <>
              <div className="card_money">
                $8/month
              </div>
              <ul>
                <li> 1 year upfront payment</li>
              </ul>
            </>
          }
          <hr className='membership_hr' />
          <Link to="/MembershipForm"><button>BE A MEMBER</button></Link>
        </div>
        <div className="card">
          <div className="card_head">
            Associate Member
          </div>
          <Radio.Group style={{ width: "100%" }} onChange={onChangeAssociate} defaultValue="associate_man">
            <Radio.Button style={{ width: "50%", padding: "3px 0px", display: "inline-flex", height: "40px", justifyContent: "center" }} value="associate_man">Man</Radio.Button>
            <Radio.Button style={{ width: "50%", padding: "3px 0px", display: "inline-flex", height: "40px", justifyContent: "center" }} value="associate_lady">Lady</Radio.Button>
          </Radio.Group>
          <div style={{
            paddingTop: "34px", fontWeight: "400",
            fontSize: "12px"
          }}>STARTS AT*</div>
          {associateMan ?
            <>
              <div className="card_money">
                $30/month
              </div>
              <ul>
                <li> 6 months upfront payment </li>
              </ul>
            </> :
            <>
              <div className="card_money">
                $8/month
              </div>
              <ul>
                <li> 1 year upfront payment</li>
              </ul>
            </>
          }
          <hr className='membership_hr' />
          <Link to="/MembershipForm"><button>BE A MEMBER</button></Link>
        </div>
      </div>

      <div>

      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "80vw", margin: "auto", marginBottom: "50px" }}>

        <div className='membership_head_2'> Have questions about membership?</div>

        <div className='membership_desc_2'>If you’re not sure which membership is right for you, connect with our team below.</div>
      </div>
      <div className="Contact_us_Row" style={{ marginBottom: "100px" }}>
        <div  >

          <div className="Col_1">
            <div className='call-icon' />
            <div>Give us a Call</div>
            <div>Interested in Singapore Indian Association? You are just a call away from talking to our executive.</div>
            <div>(+65) 81 332 5695</div>
          </div>
        </div>
        <div span={12} >
          <div className="Col_1">
            <div className="mail-icon" />
            <div className='Col_2'>Write us on Email</div>
            <div className='Col_2'>Send us your message on our
              email id in details.</div>
            <div>contact@sia.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership