import Test from "../Test";


const OnClick = () => {
    const Data = () => {
        console.log("Call API when this function");
        Test();
        console.log(" This is API when this function");
    }
    return(
        <div>
            <button onClick={ () => Data()}> Click Me</button>
        </div>
    )
}

export default OnClick;