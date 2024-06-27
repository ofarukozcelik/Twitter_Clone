import React from 'react'

const Aside = () => {
    return (
        <div className='max-xl:hidden'></div>
    )
}
// react.memo: 
// Bileşenin aldığı proplar değişmediği müddetçe,
// bileşenin tekrardan render olmasının önüne geçer.

// Bir üst bileşen olan Feed bileşeninde user state'inin değişmesi,
// Feed bileşeninin tekrardan render olmasına,
// ardından Aside bileşenin ise gereksiz yere tekrar render olmasına sebep oluyordu.
// react.memo ile bunun önüne geçtik.

export default React.memo(Aside)