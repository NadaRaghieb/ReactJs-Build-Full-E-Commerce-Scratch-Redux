import React,{useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import FormInput from './components/FormInput';
import QAList from './components/QAList';
import { question } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 const [data, setData] = useState(question);
 const addItem =()=>{
  localStorage.setItem('items', JSON.stringify([...question]))
  setData([...question])
  notify('Added successfully', 'Success' )
 }
 const deleteAllItem= ()=>{
  localStorage.removeItem('items')
  question.splice(0, question.length)
  setData([])
  notify('Delete All successfully','Success')
 }
 const deleteOneItem=( items)=>{
  localStorage.setItem('items', JSON.stringify([...items]))
  setData([...items])
  if (items.length <=0){
    deleteAllItem()
    notify('Delete question successfully','Success')
  }
 }
 const notify = (message, type) => {
  if(type === "Error")
  toast.error(message)
  else if(type==='Success')
  toast.success(message)
};
  return (
    <div className='font text-center color-body'>
    <Container className='p-5'>
          <Row className='justify-content-center'>
              <Col sm='4'>
                  <div className='fs-3 text-center py-2'>Frequently asked questions and answers</div>
              </Col>
              <Col sm='8'>
                <FormInput onAdd={addItem} notify={notify}/>
                <QAList data={data} deleteOneItem={deleteOneItem}/>
                {
                  localStorage.getItem('items') !=null ? (<button onClick={deleteAllItem} className='btn-color w-100 m-3'>Delete All</button>
                  ):null
                }
              </Col>
          </Row>
          <ToastContainer />
    </Container>
  </div>
  );
}

export default App;
