import React, { FC } from 'react'
import styles from 'styles/utility/flex.module.scss'
import { SearchButton, TextInput } from 'components/atoms';

const SearchField: FC = () => {
    return (
        <div className={styles.flex__row_center}>
            <TextInput
                onChange={() => null}
                value={"text"}
                type={"Foo"}
            />
            <SearchButton
                label={"Search"}
                onClick={() => null}
            />
        </div>
    )
}

export default SearchField