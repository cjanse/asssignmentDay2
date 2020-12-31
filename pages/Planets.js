const Planets = props => {
    return (
        <div className="flex flex-col flex-center justify-center h-screen bg-gray-300">
            <div className = "flex flex-col text-center items-center">
                <h1 className="text-bold text-yellow-600 text-2xl">STAR WARS PLANETS</h1>
                <div className="p-5">
                <h1>{props.name[0]}</h1>
                <p>{props.pop[0]}</p>
                </div>
                <div className="p-5">
                <h1>{props.name[1]}</h1>
                <p>{props.pop[1]}</p>
                </div>
                <div className="p-5">
                <h1>{props.name[2]}</h1>
                <p>{props.pop[2]}</p>
                </div>
                <div className="p-5">
                <h1>{props.name[3]}</h1>
                <p>{props.pop[3]}</p>
                </div>
                <div className="p-5">
                <h1>{props.name[4]}</h1>
                <p>{props.pop[4]}</p>
                </div>
                <div className="p-5">
                <h1>{props.name[5]}</h1>
                <p>{props.pop[5]}</p>
                </div>
                <div className="p-5">
                <h1>{props.name[6]}</h1>
                <p>{props.pop[6]}</p>
                </div>
                <div className="p-5">
                <h1>{props.name[7]}</h1>
                <p>{props.pop[7]}</p>
                </div>
            </div>
        </div>
    )
}
export default Planets;