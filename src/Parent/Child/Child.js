import { SubChild } from "./Subchild/Subchild";

export function Child(props) {
    console.log(props, 'props');

    function getData(data) {
        console.log(data)
    }

    return (
        <p>
            This is a child and name is:  
            {props.user.name}
            <SubChild data={getData}/>

        </p>
    )
}