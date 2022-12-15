import React from 'react';
import styles from './ModalWindow.module.css';


const ModalWindow = (props) => { 

   const modalVindowIsNone = [styles.conteiner];
   if (props.visible === true) {
      modalVindowIsNone.push(styles.activ);
   }

   
   return (
      <React.Fragment>
         <div className={modalVindowIsNone.join(' ')} onClick={props.onClickOverlay}>
            <div className={styles.overlay}></div>
            <div className={styles.modal}>
               <img className={styles.image} src={props.imageURL}></img>
               <button className={styles.modal_btn} onClick={props.onClickOverlay}>X</button>
            </div>
         </div>
      </React.Fragment>
   )
}

export default ModalWindow;