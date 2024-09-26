import React from "react";
interface BlockProps{
    value:String | null
    oneClick?: ()=> void
}
const Block: React.FC<BlockProps> = (props)=>{
    return <div onClick={props.oneClick} className="block">
            {props.value}
    </div>
}
export default Block