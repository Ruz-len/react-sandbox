const Counter = (props) => {
    const { count, addOne } = props;

    return (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={ ()=> addOne(1) }>Add +1</button>
            <button onClick={ ()=> addOne(3) }>Add +3</button>
            <button onClick={ ()=> addOne(-1) }>Sub -1</button>
        </div>
       
    );
}

export default Counter;