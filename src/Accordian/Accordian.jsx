import { useState } from 'react'
import { questions } from './data';
import MyAccordian from "./MyAccordian"


function App() {
  const [data, setData] = useState(questions);
    return (
        <>
            <h1 className=' text-center text-4xl'>Accordion</h1>
            <section>
              <div className='flex justify-center items-baseline gap-4'>
                <h1 className=' text-center text-3xl mt-3'>Is multiple open accordion allowed?</h1>
                <input type="checkbox" name="" id="" className=' h-5' />
              </div>
                
            {
                data.map((items,index) => {
                    console.log(items);
                    return <MyAccordian key={index} {...items}/> 
                })
            }
            </section>
        </>
    );
}

export default App