import style from './Copyright.module.css'

function Copyright() {
    return (
        <div className={`copyright ${style.main}`}>
            <p className={style.text}>© 2022 RP Agencies. All rights reserved.</p>
        </div>
    )
}

export default Copyright