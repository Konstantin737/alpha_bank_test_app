import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from "react";
import styles from './PostList.module.css'
import '../App.css'
import PostItem from "./PostItem";

const PostList = (props) => {

   if (!props.posts.length) {
      return (
         <h1 style={{textAlign:'center', color: 'gray', marginTop: '30px'}}>-- Пока тут пусто --</h1>
      )
   }

   return (
      <div className={styles.post_list}>
         <TransitionGroup>
            {props.posts.map((post, index) =>
               <CSSTransition key={post.id} timeout={500} classNames='post'>
                  <PostItem post={post} number = {index+1} like = {post.like} deletePost={props.deletePost} likeOrDis={props.likeOrDis}/>
               </CSSTransition>
            )}
         </TransitionGroup>
      </div>
   )
}

export default PostList;


