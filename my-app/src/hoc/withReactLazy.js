import React, { Suspense } from 'react'

const withReactLazy = (Component) => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Component/>
        </Suspense>
    )
}

export default withReactLazy