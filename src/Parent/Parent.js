import {Child} from './Child/Child.js'

export function Parent() {
    const user = {
        name: 'xxx',
    }
    return (
        <>
            This is a parent
            <Child  user = {user}/>
        </>
    )
}