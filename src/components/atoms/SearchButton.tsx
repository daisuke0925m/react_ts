import React, { ChangeEvent, FC } from 'react';
import styles from 'styles/atoms/button.module.scss'

interface Props {
    onClick: () => void
    label: string
}

const SearchButton: FC<Props> = React.memo((props) => {
    const {
        onClick,
        label,
    } = props

    return (
        <button
            className={styles.button__search}
            onClick={onClick}
        >
            {label}
        </button>
    );
})

export default SearchButton;