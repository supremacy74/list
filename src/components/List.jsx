import Item from './Item'

const List = ({ main, list, change }) => {

    return (
        <ul className="list">
            {
                list.map(item => {
                    return <Item key={item.key} main={main} item={item} change={change} />
                })
            }
        </ul>
    )

}

export default List