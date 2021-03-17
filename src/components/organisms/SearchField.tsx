import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import styles from 'styles/utility/flex.module.scss'
import { SearchButton, TextInput } from 'components/atoms';

const SearchField: FC = () => {

    const [keyword, setKeyword] = useState<string>("");

    const handleKeyword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
    }, [setKeyword])


    return (
        <div className={styles.flex__row_center}>
            <TextInput
                onChange={handleKeyword}
                type={"Foo"}
                value={keyword}
            />
            <SearchButton
                label={"Search"}
                onClick={() => null}
            />
        </div>
    )
}

export default SearchField