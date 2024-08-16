import Child from './Child'

export default function Parent(){
    return(
        <>
        <h2>Parent to Child</h2>
        <Child message = {'Message from Parent to Child'} />
        <div>-------------------------------------------------------------</div>
        </>
    )
}

// Passing data from parent component to child component