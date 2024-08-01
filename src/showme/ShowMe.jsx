import React from 'react';

const ShowMe = () => {
    const[showme,setShowme] = useState(1);


  const showMe = ()=> {
      setShowme(2)
  }

  const deleteBtn = ()=> {
    setShowme(1)
  }

  const Accept = ()=> {
    setShowme()
  }
    return (
        <>
        {
          showme == 1 ? (
            <button onClick={showMe}>Show me</button>
          ): showme == 2 ?(
            <div>
              <button onClick={deleteBtn}>X</button>
              <p>click the button below to accept our amazing offer!</p>
              <button onClick={Accept}>Accept offer</button>
            </div>
          ):(
            <h1>Offer Accepted</h1>
          )
        }
        </>
    );
}

export default ShowMe;
