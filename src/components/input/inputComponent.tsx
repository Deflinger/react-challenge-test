

export const InputComponent = ()=>{
    return (
        <div className="input-group mb-3">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="type your Number" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Reset</button>
                </div>
                <div className="error-message">
                    Value that you entered is not a number!
                </div>
            </div>
        </div>
    )
}