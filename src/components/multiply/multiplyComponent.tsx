import { useAppContext } from "../../context/Appcontext";


export const MultiplyComponent= () => {
    const {value}= useAppContext();
    
    if (value === null || isNaN(value)) {
        return null;
    }

    return (
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">value*2</h5>
                <p className="card-text">{value*2}</p>
            </div>
        </div>
    );
}