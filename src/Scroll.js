import React from 'react'


 const Scroll = (props) => {
        // return console.log(props);
        
        
         return  <div className='cssapp' style = {{ overflowY: 'scroll', border: '2px solid black', height: '800px'}}>{props.children}
                
            </div>;
        
}

export default Scroll

