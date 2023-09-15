import "./button.css"
import { buttonType } from "../type.check";


const Button = ({ handleClick, children, type, style, isLoading, disabled }: buttonType) => {
    switch (type) {
        case "filled":
            return (
                <button disabled={disabled} style={style} className="button" onClick={handleClick}>
                    {isLoading ?
                        <div className="loader-wrap">
                            <div className="loader"></div>
                        </div> :
                        children
                    }
                </button >
            )
        case "out-line":
            return (
                <button className="button-outline" style={style}  onClick={handleClick}> {children}</button >
            )
        default:
            return null
    }
};

export default Button;
