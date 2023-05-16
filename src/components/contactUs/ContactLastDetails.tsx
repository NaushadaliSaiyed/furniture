import React from 'react';
import { Collapse } from 'antd';
import '../../style/contactLastDetails.css'


const { Panel } = Collapse;

const ContactLastDetails = () => {

    return (
        <>
            <div>
                <p className='font-semibold text-lg'> Visit us </p>
                <div className='mt-4 text-gray-500 cursor-pointer'>
                    Alaska <br />
                    ui. Massachusetts 25, 05-958 <br />
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>sharif@front.studio</p>
                </div>
            </div>
            <span>
                <p className='font-semibold text-lg'>Call us</p>
                <div className='mt-4 text-gray-500  '>
                    <div className='cursor-pointer'>
                        <p>Russia</p>
                        <p className='fire-art-web-design flex columns-1 text-gray-500'> +07 (65) 785 9874</p>
                    </div>
                    <div className='mt-3 cursor-pointer'>
                        <p>India</p>
                        <p className='fire-art-web-design flex columns-1 text-gray-500'> +91 (98) 5401 2040</p>
                    </div>
                    <div className='mt-3 cursor-pointer'>
                        <p>France</p>
                        <p className='fire-art-web-design flex columns-1 text-gray-500'> +33 (75) 786 6548</p>
                    </div>
                </div>
            </span>
            <span>
                <p className='font-semibold text-lg'>Company</p>
                <div className='mt-4 cursor-pointer text-gray-500'>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Cases</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Service</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>About Us</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Blog</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Careers</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Contact Us</p>
                </div>
            </span>
            <div>
                <p className='font-semibold text-lg'>Details</p>
                <div className='mt-4'>
                    <Collapse
                        style={{ cursor: "pointer", fontWeight: "600" }}
                        className='contact-last-details'
                        bordered={false}
                        defaultActiveKey={['0']}
                    >
                        <Panel header="Service" key="1">
                            <p className='fire-art-web-design flex text-gray-500 mt-1'>Agile Team of JS Programmers</p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'>Refreshing existing products </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'>Building product from scratch </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'>Digital Product Design </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'>Branding </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'>Motion Design </p>
                        </Panel>
                        <Panel header="Technologies" key="2">
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> React js development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Node.JS development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> React Native/app development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> VUE/web development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Angular development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> .NET </p>
                        </Panel>
                        <Panel header="Expertise" key="3">
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Automated testing service </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web portal development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web development/wordpress </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web development/front end </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web development/back end </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web development </p>
                        </Panel>
                        <Panel header="Developers" key="4">
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web developer/front end </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Mobile app developer </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web development/back end </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Node.JS/hire developers </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> React js developer </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Web app developer </p>
                        </Panel>
                        <Panel header="Industries" key="5">
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> React js development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Node.JS development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> React Native/app development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> VUE/web development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Angular development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> .NET </p>
                        </Panel>
                        <Panel header="Cities we operate in" key="6">
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> React js development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Node.JS development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> React Native/app development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> VUE/web development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> Angular development </p>
                            <p className='fire-art-web-design flex text-gray-500 mt-1'> .NET </p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
            <span>
                <p className='font-semibold text-lg'>Follow us</p>
                <div className='mt-4 cursor-pointer text-gray-500'>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Dribble</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Trello</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Instagram</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Facebook</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Linkedin</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Twitter</p>
                    <p className='fire-art-web-design flex columns-1 text-gray-500'>Medium</p>
                </div>
            </span>
        </>
    )
}

export default ContactLastDetails
