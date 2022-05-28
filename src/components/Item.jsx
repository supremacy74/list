import { useState, useEffect } from 'react'

import List from './List'

const Item = ({ main, item, change }) => {

    const [visibility, setVisibility] = useState(true)

    const classes = `circle ${visibility ? 'cross' : null}`

    const id = `my-eys-flowed-out-${item.key}`

    useEffect(() => {
        document.querySelector(`#${id}`).indeterminate = item.checked === 'indeterminate' && true
    }, [main])

    return (
        <li className="item">
            <div className="top">
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
                <div className="part">
                    {item.list && <button className={classes} onClick={() => setVisibility(!visibility)}></button>}
                    <input
                        id={`${id}`}
                        checked={item.checked ? true : item.checked === 'indeterminate' ? false : false}
                        type="checkbox"
                        onChange={event => change(event.target.checked, main, item.key)}
                    />
                </div>
            </div>
            {visibility && item.list && <List main={main} list={item.list} change={change} />}
        </li>
    )

}

export default Item