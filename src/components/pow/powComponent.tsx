import { useAppContext } from "../../context/Appcontext";

export const PowComponent = ()=> {
    const {value}= useAppContext(); 

    if (value === null || isNaN(value)) {
        return null;
    }

    return (
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">pow value^value</h5>
                <p className="card-text">{Math.pow(value,value)}</p>
            </div>
        </div>
    );
}