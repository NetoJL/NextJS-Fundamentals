export default function jsx(){

    const title = <h1>JSX is a central concept</h1>

    function subtitle() {
        return <h2>{"very nice".toUpperCase()}</h2>
    }

    return (
        <div>
            {title}
            {subtitle()}
            <p>
                {JSON.stringify({name: 'Joao', age: 30})}
            </p>
        </div>
    )
}