const Greeting = () => {
    
    const GreetingMessage = "Hello";
    const date = new Date()

    return (
        <div>
            <h1>{GreetingMessage}</h1>
            <p>Date: {date.getDate()}</p>
        </div>
    )
}

export default Greeting