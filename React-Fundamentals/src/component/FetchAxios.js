import React,{useEffect,useState} from 'react'
import axios from 'axios'
const FetchAxios = () => {
    const [data, setData] = useState([]);
    // const fetchData=async ()=>{
    //   await fetch('https://jsonplaceholder.typicode.com/posts',{
    //         method:'GET'
    //     }).then(res=>res.json()).then(json=>setData(json))
    // }
    const fetchAxios =async() =>{
      const res=  await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(res.data)
    }
    useEffect(() => {
        fetchAxios()
    }, []);
  return (
    <div>
      {data.map((item)=>{
        return (<h3>{item.title}</h3>
        )
      })}
    </div>
  )
}

export default FetchAxios
