import React from 'react'
import CharaterItem from './CharaterItem'
import spinner from '../../images/spinner.gif'

const CharaterGrid = ({ isLoading, items }) => {
    return isLoading ? (
        <div className='center'>
            <img src={spinner} alt='loading' />
        </div>
    ) : (
        <div className='cards'>
            {items.map(item => (
                <CharaterItem
                    key={item.char_id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default CharaterGrid