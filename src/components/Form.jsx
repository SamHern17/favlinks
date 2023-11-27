function Form(){

    return(

        <form>
            <label for="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" value=""></input>
            <br />
            <br />
            <label for="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" value=""></input>
            <br />
            <br />
            <input type="submit" value="Submit"></input>    
        </form>
    )

}

export default Form