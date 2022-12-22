import React from 'react'
import './ReviewMessage.css'

function ReviewMessage() {
  return (
    <div>
        <div className="events_component_1">
                <div className="events_1">
                    <h1>MEMBERSHIP</h1>
                </div>
                <div className="events_2">HOME - Membership</div>
            </div>

        <div className='Review_confirm'> 
            <div className='tick_icon'>
                <img src="/images/Icon.png"/>
            </div>
            <div className='review_msg_1'>
            Thankyou for showing interest in SIA Membership. Our board will review your membership request and update you via call/email upon confirmation of your membership.
            </div>
            <div className='review_msg_2'>
            You would be given period of 15 days to complete payments after membership approval.
            </div>
        </div>
    </div>
  )
}

export default ReviewMessage