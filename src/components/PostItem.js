import { useState } from 'react';
import styles from './PostItem.module.css'
import MyButton from './UI/button/MyButton';
import ModalWindow from './ModalWindow/ModalWindow';




const PostItem = (props) => {

   const [likeIsTrueOrFalse, setLikeIsTrueOrFalse] = useState(props.like)
   const [like, setLike] = useState((props.like===false)?'👍🏻':'👍')
   const [visible, setVisible] = useState(false)

   const visibleModal = () => {
      setVisible(true);
   }

   const modalWindowClose = () => {
      setVisible(false);
   }

   const sayLike = () => {
      if (likeIsTrueOrFalse === false) {
         return (setLike('👍'), setLikeIsTrueOrFalse(true));
      } else {
         return (setLike('👍🏻'), setLikeIsTrueOrFalse(false));
      }
   }


   props.likeOrDis(likeIsTrueOrFalse, props.post.id)
   

   return (
      <div className={styles.post}>
         <ModalWindow visible={visible} modalWindowClose={modalWindowClose} imageURL = {props.post.url}/>
         <div className={styles.post__content}>
            <strong>{props.number}. {props.post.title}</strong>
            <img className={styles.image} src={props.post.thumbnailUrl} onClick={visibleModal}/>
            <div className={styles.btn_panel}>
            <MyButton onClick={sayLike}>{like}</MyButton>
            <MyButton onClick={()=>props.deletePost(props.post.id)}>🗑️</MyButton>
            </div>
         </div>
      </div>
   )
}

export default PostItem;