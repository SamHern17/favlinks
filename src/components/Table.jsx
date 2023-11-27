function TableHeader(){
    /* responsible for rendering the head of our table with the appropriate columns */
    return(
        <thread>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thread>

    )

}

function TableBody(){
    /* responsible for rendering the data for our table */
    return(
        <tbody>
            
        </tbody>

    )

}

function Table(){

    return(
        <table>
          <TableHeader/>
          <TableBody/>
        </table>
    )

}

export default Table