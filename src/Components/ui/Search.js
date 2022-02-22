import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section>
            <form>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Searh characters'
                    autoFocus
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search