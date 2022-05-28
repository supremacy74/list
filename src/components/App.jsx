import { useState } from 'react'

import List from './List'

import styles from '../styles/App.module.css'

import data from '../data/data.json'

const App = () => {

    const [list, setList] = useState(data)

    const main = [...list]

    const change = (checked, list, key) => {

        list.forEach(item => {

            if (item.key.startsWith(key)) {
                item.checked = checked
            }

            if (item.list) {
                change(checked, item.list, key)
            }

            if (item.list) {

                let total = 0
                let indeterminate = 0

                item.list.forEach(item => {

                    if (item.checked === true) {
                        total += 1
                    }

                    if (item.checked === 'indeterminate') {
                        indeterminate += 1
                    }

                })

                if (total === item.list.length) {
                    item.checked = true
                } else if (total > 0 || indeterminate > 0) {
                    item.checked = 'indeterminate'
                } else {
                    item.checked = false
                }

            }

        })

        setList(main)

    }

    return (
        <div className={styles.app}>
            <List main={main} list={list} change={change} />
        </div>
    )

}

export default App
