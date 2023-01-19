import './legend.css';


const Legend = (props) =>{

    return (
        <div className="box">
            <b>{props.name}[level]</b>
            <div>
                {props.colors ?
                    props.colors.map((col, ind)=>(
                        <div key={ind} className='colors'>
                            <div  >
                                <p >{col.Color} {col.Label}</p>
                            </div>
                        </div>
                    ))
                :
                <div>No Data</div>
                }
            </div>
        </div>
    )
}

export default Legend;