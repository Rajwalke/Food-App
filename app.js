/* <div id="Parents">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm H 2 tag<h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm H 2 tag<h2>
    </div>

</div> */

const parent=React.createElement("div",{id:"parents"},
            [
            React.createElement("div",{id:"child1"},
                [
                 React.createElement("h1",{},"I'm h1 Tag"),
                 React.createElement("h2",{},"I'm h2 Tag")
                ]
            ),
            React.createElement("div",{id:"child2"},
                [
                 React.createElement("h1",{},"I'm h1 Tag"),
                 React.createElement("h2",{},"I'm h2 Tag")
                ]
            )
            ]

)

// const heading=React.createElement(
//     "h1",
//     {class:"Hello"},
//     "Hello World from React"
// );
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent); 