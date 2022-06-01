import React from 'react'
import {
   Row,
   Button,
   Form,
   Input,
   Select,
   Col
} from 'antd';

const { Option } = Select;





function Formvalidate() {
   const [form] = Form.useForm();

   const onFinish = (values) => {
      console.log('Received values of form: ', values);
   };

   const prefixSelector = (
      <Form.Item name="prefix" noStyle>
         <Select style={{ width: 70 }}>
            <Option value="84">+84</Option>

         </Select>
      </Form.Item>
   );

   return (
      <div >
         {/* <div >
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Register Form</h2>
      </div> */}
         <div style={{ display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center' }}>


            <Form

               form={form}
               name="register"
               style={{ width: '600px' }}
               onFinish={onFinish}
               initialValues={{
                  residence: ['zhejiang', 'hangzhou', 'xihu'],
                  prefix: '84',
               }}
               scrollToFirstError
            >
               <Row gutter={24}>
                  <Col span={12} style={{ width: '100%' }}>
                     <Form.Item
                        name="name"
                        style={{ width: '100%' }}
                        rules={[
                           {
                              required: true,
                              message: 'Please input your Name!',
                           },
                           {
                              min: 6,
                              message: 'Please enter at least 6 characters'
                           }, {
                              max: 20,
                              message: 'Please enter at most 20 characters'
                           }
                        ]}
                        hasFeedback
                     >
                        <Input placeholder="Your Name" />
                     </Form.Item>
                  </Col>
                  <Col span={12}>
                     <Form.Item
                        name="email"

                        rules={[
                           {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                           },
                           {
                              required: true,
                              message: 'Please input your E-mail!',
                           },
                           {
                              whitespace: true,
                              message: 'Does not contain spaces'
                           }
                        ]}
                        hasFeedback
                     >
                        <Input placeholder='Your Email' />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.Item
                        name="phone"
                        rules={[
                           {
                              required: true,
                              message: 'Please input your phone number!'
                           },
                           {
                              pattern: new RegExp(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/),
                              message: 'Please enter a valid phone number'
                           }]}
                           hasFeedback
                     >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder='Your Phone' />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.Item
                        name="address"
                        rules={[
                           {
                              required: true,
                              message: 'Please input your address!',
                           },
                           {
                              pattern: '^[a-zA-Z0-9\,\/ ]*$',
                              message: 'Text only, accept , and / characters'
                           }
                        ]}
                        hasFeedback
                     >
                        <Input placeholder="Your Address" />
                     </Form.Item>
                  </Col>
                  <Col span={24}>
                     <Form.Item
                        name="password"
                        rules={[
                           {
                              required: true,
                              message: 'Please input your password!',
                           },
                           {
                              min: 6,
                              message: 'Please enter at least 6 characters'
                           }, {
                              max: 20,
                              mesage: 'Please enter at most 20 characters'
                           },
                           {
                              pattern: '^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,20})',
                              message: 'Password must contain at leastone uppercase letter, and one special character'
                           }
                        ]}
                        hasFeedback
                     >
                        <Input.Password />
                     </Form.Item>
                  </Col>

                  <Col span={24} style={{ width: '100%', display: 'block' }}>
                     <Form.Item style={{ width: '100%' }}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                           Submit
                        </Button>
                     </Form.Item>
                  </Col>
               </Row>
            </Form>
         </div>
      </div>
   )
}

export default Formvalidate