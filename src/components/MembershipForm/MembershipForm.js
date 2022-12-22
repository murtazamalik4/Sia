import React from 'react'
import './MembershipForm.css'
import { Link } from 'react-router-dom'
import { Button, DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import { useState } from 'react';
const { Option } = Select;
function MembershipForm() {

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');


    return (
        <div>
            <div className="events_component_1">
                <div className="events_1">
                    <h1>MEMBERSHIP</h1>
                </div>
                <div className="events_2">HOME - Membership</div>
            </div>
            <div className='card_membership'>
                <p className='card_membership_header'>SIA Membership Application</p>
                <p className='card_membership_header2'>please fill in your official information</p>
                <Form
                    form={form}
                    layout="vertical"
                >
                    <div className='formInnerDivider'>
                        <Form.Item style={{ width: '100%', }} label="Title" required>
                            <Input placeholder="title" />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} label="Name as per NRIC/FIN" required>
                            <Input placeholder="Name" />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider'>
                        <Form.Item style={{ width: '100%', }} label="Name to be printed on the card" required>
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} label="Title" required>
                            <Input placeholder="title" />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} name="date-picker" label="Joined Date" rules={[{ type: 'object', required: true, message: 'Please select date!' }]}>
                            <DatePicker style={{width:"100%",height:"40px"}}/>
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider'>
                        <Form.Item style={{ width: '100%', }} name="date-picker" label="Date of Birth" rules={[{ type: 'object', required: true, message: 'Please select time!' }]}>
                            <DatePicker style={{width:"100%",height:"40px"}}/>
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} label="Race" required>
                            <Input placeholder="Race" />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} label="Nationality" required>
                            <Input placeholder="Nationality" />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider'>
                        <Form.Item style={{ width: '100%', }} label="NIRC/FIN" required>
                            <Input placeholder="NIRC/FIN" />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} label="Email" required>
                            <Input type='email' placeholder="Email" />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }}
                            name="gender"
                            label="Marital Status"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select marital status!',
                                },
                            ]}
                        >
                            <Select placeholder="select your marital status">
                                <Option value="maried">Male</Option>
                                <Option value="unmaried">Female</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider'>
                        <Form.Item style={{ width: '100%', }}
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input


                            />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }}
                            name="phone"
                            label="Home Contact Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input


                            />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }}
                            name="phone"
                            label="Office Contact Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider'>
                        <Form.Item style={{ width: '100%', }} name="phone" label="Postal Code"
                            rules={[
                                {
                                    required: true,
                                    // message: 'Please input your phone number!',
                                },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} name="phone" label="Street Name"
                            rules={[
                                {
                                    required: true,
                                    // message: 'Please input your phone number!',
                                },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }} name="phone" label="House Number/Block"
                            rules={[
                                {
                                    required: true,
                                    // message: 'Please input your phone number!',
                                },]}>
                            <Input />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider'>
                        <Form.Item name="occupation" style={{ width: "100%" }} label='Unit Number' rules={[
                            {
                                required: true,
                                message: 'Please input your unit number!',
                            },
                        ]} >
                            <InputNumber style={{width:"100%",height:"40px"}} />
                        </Form.Item>
                        <Form.Item name="occupation" style={{ width: "100%" }} label='Occupation' rules={[
                            {
                                required: true,
                                message: 'Please input your Occupation!',
                            },
                        ]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name="occupation" style={{ width: "100%" }} label='Occupation Title' rules={[
                            {
                                required: true,
                                message: 'Please input your Occupation Title!',
                            },
                        ]} >
                            <Input />
                        </Form.Item>
                        <Form.Item name="occupation" style={{ width: "100%" }} label='Company Name' rules={[
                            {
                                required: true,
                                message: 'Please input your Company!',
                            },
                        ]} >
                            <Input />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider formInnerDivider1'>
                        <Form.Item style={{ width: '100%', }}
                            name="phone"
                            label="Emergency Contact Number Person 1"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }}
                            name="phone"
                            label="Emergency Contact Number Person 2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider formInnerDivider1'>
                        <Form.Item style={{ width: '100%', }}
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Name!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                        <Form.Item style={{ width: '100%', }}
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Name!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider formInnerDivider1'>
                    <Form.Item style={{ width: '100%', }}
                            name="relationship"
                            label="Relationship"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Relationship!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                    <Form.Item style={{ width: '100%', }}
                            name="relationship"
                            label="Relationship"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Relationship!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider formInnerDivider1'>
                    <Form.Item style={{ width: '100%', }}
                            name="number"
                            label="Mobile/Home"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Mobile/Home!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                    <Form.Item style={{ width: '100%', }}
                            name="number"
                            label="Mobile/Home"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input Mobile/Home!',
                                },
                            ]}
                        >
                            <Input
                            // addonBefore={prefixSelector}

                            />
                        </Form.Item>
                    </div>
                    <div className='formInnerDivider'>
                    <Form.Item style={{ width: '100%', }}
                            name="payments"
                            label="Payments Option"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Payments Option!',
                                },
                            ]}
                        >
                            <Select placeholder="select your Payments Option">
                                <Option value="DBS current">DBS current</Option>
                                <Option value="Paynow UEN">Paynow UEN</Option>
                            </Select>
                        </Form.Item>
                        
                    <Form.Item style={{ width: '100%', }}
                            name="membership"
                            label="Membership/Subscription"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Membership/Subscription!',
                                },
                            ]}
                        >
                            <Select placeholder="select your Membership/Subscription">
                                <Option value="6 months (ordinary & associate man)">6 months (ordinary & associate man)</Option>
                                <Option value="1 year (ordinary & associate lady)">1 year (ordinary & associate Lady)</Option>
                                <Option value="1 month (Junior member)">1 month (Junior member)</Option>
                            </Select>
                        </Form.Item>
                        
                    </div>
                    

                </Form>
                <Link to="/review_message"><button>SUBMIT</button></Link>
            </div>




        </div>
    )
}

export default MembershipForm