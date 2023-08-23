export function SubChild(props) {
    
    console.log(props, 'props')
    props.data('sub child comp is called');
    return (
        <>This is a subchild</>
    )
}