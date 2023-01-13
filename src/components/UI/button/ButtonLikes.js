import styles from './MyButton.module.css'

const ButtonLikes = ({children, ...props}) => {
   <button {...props} className={styles.my_button}>{children}</button>
}

export default ButtonLikes;