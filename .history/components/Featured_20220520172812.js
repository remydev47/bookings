/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

const Featured = () => {
    return(
         <div>{/*featured*/}
            <div>{/*Featured item*/}
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" />
                <div>{/*featured title*/}
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
                <div>
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" />
                    <div>
                        <h1>Reno</h1>
                        <h2>533 Properties</h2>
                    </div>
                </div>
                <div>
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" />
                    <div>
                        <h1>Austin</h1>
                        <h2>532 Properties</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;