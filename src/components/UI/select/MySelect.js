import React from "react";
import styles from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, onChange}) => {
   return (
      <select
         className={styles.select_item} 
         value={value}
         onChange = {event=>onChange(event.target.value)}
      >
         <option disabled value=''>{defaultValue}</option>
         {options.map(option => 
            <option key={option.name} value={option.value}>
               {option.name}
            </option>
         )}
      </select>
   );
}

export default MySelect;




// style={{height: 30, backgroundColor: 'rgba(0, 255, 255, 0.192)', fontSize: '18px'}}