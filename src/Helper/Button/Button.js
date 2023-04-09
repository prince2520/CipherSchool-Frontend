import '../../Button.scss';
import {buttonStatus} from "../../common";
const Button = (props) => {
    const eventHandler = () => {
        if(props.children === buttonStatus[1] || props.children === buttonStatus[2])
            props.saveHandler && props.saveHandler();
        else if(props.children === buttonStatus[0]){
            props.showEditHandler(false)
        }
    }

    return (
        <button className='edit-save' onClick={()=>eventHandler()}>{props.children}</button>
    )
}

export default Button;