import { useState } from "react";
import { BsX } from "react-icons/bs";

const TopBanner = ({ common, basic, menu }) => {
    const [on, SetOn] = useState('')
    return (
        <div className={`TopBanner ${on}`} >
            <div className="inner">
                <h2>{basic[0].title}</h2>
                <p>{basic[0].desc}</p>
            </div>
            <BsX className="btn" onClick={() => SetOn('on')} />
        </div >
    )
}

export default TopBanner; 