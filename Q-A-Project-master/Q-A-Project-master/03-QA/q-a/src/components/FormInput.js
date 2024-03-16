import React, { useState } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {question} from '../data'
const FormInput = ({onAdd, notify}) => {
  const [qu, setQu]=useState('')
  const [an, setAn]=useState('')
  const addNewItem=()=>{
    question.push({id:Math.random(),q:qu, a:an})
    if(qu==="" || an === ""){
      notify('Please complete the information', 'Error')
      return
    }
    setAn('')
    setQu('')
    onAdd()
   
  }
  return (
    <div>
      <Row className='my-3'>
        <Col sm='5'>
        <Form.Control value={qu} onChange={(e)=>setQu(e.target.value)} type="text" placeholder="Enter the Question" />
        </Col>
        <Col sm='5'>
        <Form.Control value={an} onChange={(e)=>setAn(e.target.value)} type="text" placeholder="Enter the answer" />
        </Col>
        <Col sm='2'>
      <Button onClick={addNewItem} className='btn btn-color w-100'>
        Enter
      </Button>
      </Col>
    </Row>
    </div>
  )
}

export default FormInput
