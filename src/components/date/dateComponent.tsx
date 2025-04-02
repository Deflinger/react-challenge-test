
interface DateProps{
    timeStamp: number | null;
}

export const DateComponent:React.FC<DateProps> = ({timeStamp}) => {
    if( timeStamp === null || isNaN(timeStamp)){
        return null;
    }
    const date = new Date(timeStamp*1000000);
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