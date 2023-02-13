import { useEffect, useState } from "react";
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";
import KeepAlive,{ useActivate, useUnactivate, useAliveController } from 'react-activation'

const AliveTest = () => {
    const [list, setList] = useState<Array<string>>([])

    useActivate(() => {
        console.log('AliveTest: didActivate')
    })

    useEffect(()=>{
        let l: Array<string> = []
        for(let i=0;i<300;i++){
            l.push(`item=${i}`)
        }
        setList(l)
    },[])
    
    useUnactivate(() => {
        console.log('AliveTest: willUnactivate')
    })

    return (<div className={styles.sbox}>
        {
            list?.map((v: any,dx: number) => (
                <p key={dx}>{dx}-{v}</p>
            ))
        }
    </div>)
}

const Index = (props: any) => {
    const { refresh } = useAliveController()
    const n = useNavigate()

   

    useEffect(()=>{
        // setInterval(()=>{
        //     setData(new Date().getTime().toString())
        // },1000)
    },[])    

    return (
        <>  
            <div style={{padding: 12}}>
                <div>当前url：{window.location.href}</div>
                <div>当前环境：{process.env.REACT_APP_ENV}</div>
                <button className={styles.button} onClick={()=>{
                    n("/about")
                }}>跳转</button>            
                <button className={styles.button} onClick={()=>{
                    refresh("testAlive")
                }}>刷新列表</button>
                <p>列表缓存测试：</p>
                <KeepAlive cacheKey="UNIQUE_ID" name="testAlive">
                    <AliveTest></AliveTest>
                </KeepAlive>
            </div>
        </>
    )
}

export default Index