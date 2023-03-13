import React, {useState} from 'react'

export default function SearchBox({searchHandler}) {

    const [input, setInput] = useState('')

    function submitHandler(e) {
        e.preventDefault()

        searchHandler(input)
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Search for a country here.." onChange={(e) => setInput(e.target.value)} />
        </form>
    )
}