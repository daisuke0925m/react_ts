import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import styles from 'styles/utility/flex.module.scss'
import { SearchButton, TextInput } from 'components/atoms';
import { useStringChangeEvent } from 'lib/customHooks';
import { searchHotels } from 'lib/hotels';

const SearchField: FC = () => {

    const [keyword, setKeyword] = useState<string>("");

    const handleKeyword = useStringChangeEvent(setKeyword)


    return (
        <div className={styles.flex__row_center}>
            <TextInput
                onChange={handleKeyword}
                type={"Foo"}
                value={keyword}
            />
            <SearchButton
                label={"Search"}
                onClick={() => searchHotels(keyword)}
            />
        </div>
    )
}

export default SearchField