import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const onFinish = values => {
    console.log(values);
};

export default () => {
    return (
        <div>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
               
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>)
}