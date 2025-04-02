import { useAppContext } from "../../context/Appcontext";


export const DateComponent = () => {
    const {value}= useAppContext();

    if( value === null || isNaN(value)){
        return null;
    }
    const date = new Date(value*1000000);
    const FormattedDate  =date.toLocaleDateString("en-CA",{
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return (
        <div className="card text-center">
            <div className="card-body">
                <h3 className="card-title">date in YY/MM/DD HH:MM</h3>
                <p className="card-text">{FormattedDate}</p>
            </div>
        </div>
    );
}