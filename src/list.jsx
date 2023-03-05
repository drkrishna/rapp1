import react from "react"

function MyList() {
    const style = {
        color: "yellow",
        backgroundColor: "red",

    };

    const pStyle = {
        color: "purple"
    }

    style.myfun = function () {
        console.log("this is function");
    }

    style['myfun']()

    console.log(style['color']);
    console.log(style.color);

    return (

        <div style={style}>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            <h1>this is headline</h1>
            <p style={pStyle}><strong>this is paragraph</strong> </p>
        </div>
    )
}

export default MyList;