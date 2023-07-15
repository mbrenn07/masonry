import { useState } from 'react';
import "./Button.css";

const Button = ({ children, onClick }) => {
    const [animations, setAnimations] = useState(null);

    return (
        <div className='buttonContainer'>
            <button onClick={() => {
                onClick();
                setAnimations(
                    (prevAnimation) => prevAnimation === null || prevAnimation === "buttonAnimationReversed" ?
                        "buttonAnimation" : "buttonAnimationReversed");
            }}
                className={animations}>
                {children}
            </button>
            <div className={'buttonShadow' + (animations ? " " + animations : "")}>
                
            </div>
        </div>
    );
}

export default Button;