import { useState } from "react";

interface InputProps {
    onValueChange: (value: number | null) => void;
  }
export const InputComponent: React.FC<InputProps> = ({onValueChange})=>{ 
    const [value,setValue]= useState<string>("");
    const [isvalid,setIsvalid]= useState<boolean>(true);

 
    // Función para manejar el cambio en el input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newvalue = event.target.value;
        const valid = !isNaN(Number(newvalue)); // Validamos si es un número
        const numericValue = Number(newvalue);

        setIsvalid(valid);
        setValue(newvalue);
        if (valid) {
            onValueChange(numericValue);
          } else {
            onValueChange(null);
          }
    };
    
    // Función para resetear el input
    const resetInput = () => {
       
        setIsvalid(true)
        setValue("");
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group">
                <input type="text" 
                       className={`form-control ${!isvalid ? "is-invalid":""}`}  
                       placeholder="Type your Number" 
                       value={value}
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