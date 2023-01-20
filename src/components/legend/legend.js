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
                                <div style={{display:'inline'}}><div style={{width:'10px', height:'10px', backgroundColor:col.Color ,position:'relative', top:'15px'}}></div>{col.Label} </div>
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