import React from 'react'
import {Accordion} from 'react-bootstrap'
import { question } from '../data'
const QAList = ({data, deleteOneItem}) => {


    const dataLOcal=JSON.parse(localStorage.getItem('items'))
  const onDeleteItem = (ID)=>{
    if (localStorage.getItem('items') !=null) {
      const index = question.findIndex((item)=> item.id === ID)
        question.splice(index, 1)
        deleteOneItem(question)
    }
  }

  return (
    <Accordion>
      {
        localStorage.getItem('items') !=null ? (dataLOcal.map((item, index)=>{
          return(
            <Accordion.Item key={index} eventKey={item.id}>
            <Accordion.Header>
              <div className='m-auto'>
              {item.q}
              </div>
              </Accordion.Header>
            <Accordion.Body className='text-start'>
              <div className='px-3 d-inline'>{item.a} </div>
              <button onClick={()=> onDeleteItem(item.id)} className='btn-color'>Delete the Question</button>
            </Accordion.Body>
          </Accordion.Item>
          )
        })): <h2 className='fs-4 text-center p-5'>There are no questions now</h2>
      }
  
    
  </Accordion>
  )
}

export default QAList
