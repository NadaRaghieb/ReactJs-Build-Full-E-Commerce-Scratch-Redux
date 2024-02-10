import React, {useContext} from 'react'
import State from './component/State';
import UseEff from './component/UseEff';
import UseRefEx from './component/UseRefEx';
import {ColorContext} from './component/UseContextEx';
import UseMemoEx from './component/UseMemoEx';
const App=()=> {
// 5- use Context
  const {data} = useContext(ColorContext)
//   changeData('green')
    return (
        <div>
            <State/>
            <UseEff/>
            
           <h3>{data.id}</h3>
           <h3>{data.fullName}</h3>
           
            <UseRefEx/>
            <UseMemoEx/>
           
        </div>
    )
}

export default App