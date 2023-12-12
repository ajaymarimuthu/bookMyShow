 import {Form} from 'antd'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='bg-sky-500 flex justify-center items-center mx-auto h-full'>
    <div className='bg-white w-96 p-6 text-center'>
      <h1 className='pb-4 font-bold'>BOOK MOVIE SHOWS</h1>
      <Form layout='vertical ' className='relative'>
    
        <Form.Item label='email' name='email' rules={[{ required: true, message: "Please enter your email" }]}>
          <input className='absolute  top-0 left-0 border-2 border-gray-400 w-full h-8' type="email" />
        </Form.Item>

        <Form.Item label='password' name='password' rules={[{ required: true, message: "Please enter your password" }]}>
          <input className='absolute  top-0 left-0 border-2 border-gray-400 w-full h-8' type="password" />
        </Form.Item>

        <Button title={"Register"} type="submit"/>
        <Link to="/register">
         {"Don't have an account? Register"}
        </Link>

      </Form>
    </div>
  </div>
  )
}

export default Login