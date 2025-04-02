import { useState } from "react";
import { useAppContext } from "../../context/Appcontext";


export const InputComponent= ()=>{ 
    const {setValue} = useAppContext();
    const [inputValue,setInputValue]= useState<string>("");
    const [isvalid,setIsvalid]= useState<boolean>(true);

  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newvalue = event.target.value;
        const valid = !isNaN(Number(newvalue)); 
    

        setIsvalid(valid);
        setInputValue(newvalue);
        setValue(valid ? Number(newvalue):null);
    }
    
  
    const resetInput = () => {
       
        setIsvalid(true)
        setInputValue("");
        setValue(null);
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group">
                <input type="text" 
                       className={`form-control ${!isvalid ? "is-invalid":""}`}  
                       placeholder="Type your Number" 
                       value={inputValue}
                       onChange={handleChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" 
                            type="button"
                            onClick={resetInput}
                    >Reset
                    </button>
                </div>
                {!isvalid && ( 
                <div className="error-message">
                    Value that you entered is not a number!
                </div>
                )}
            </div>
        </div>
    )
}