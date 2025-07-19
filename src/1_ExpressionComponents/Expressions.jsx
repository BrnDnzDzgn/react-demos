const Expressions = () => {

    const myName = "Big Loro";
    const multiply = (a, b) => a * b;
    const specialClass = "any-class-name";

    return (
        <section>
            <p>2 + 2</p>
            <p>{2 + 2}</p>

            <h2>myName</h2>
            <h2>{myName}</h2>

            <p>2 * 2 = {multiply(2, 2)}</p>
            <p className={specialClass}>This is special class</p>
        </section>
    )
};

export default Expressions