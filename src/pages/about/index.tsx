import { useEffect } from 'react';
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";

const Index = () => {
    const n = useNavigate()
    useEffect(()=>{},[])

    return (
        <>
            <div>About</div>
            <button className={styles.button} onClick={()=>{
                n("/")
            }}>返回</button>
        </>
    )
}

export default Index