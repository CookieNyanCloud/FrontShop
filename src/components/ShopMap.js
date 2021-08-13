import React from 'react'
import { useContext, useEffect } from "react";
import { GlobalContext } from '../context/GlobalState'
export const ShopMap = () => {
    console.log("SM");

    const {
        zones,
        handleClick,
        IDclick,
        handleZones,
        zonesDidLoad
    } = useContext(GlobalContext);

    
    useEffect(() => {
        handleZones()
        console.log("SMUE");
        if(IDclick>0&&zonesDidLoad){
            let g = document.getElementById("svg-g")
            let child = g.querySelectorAll("ellipse")
            child.forEach(ellipse => {
                if(zones[ellipse.id-1].taken != 0){
                    ellipse.classList.add("taken")
                    ellipse.classList.remove("tobetaken")
                }else{
                    ellipse.classList.add("tobetaken")
                    ellipse.classList.remove("taken")
                }
            })
        }

    }, [IDclick])

    return (
            <div>
                <svg onClick={handleClick} width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                    <g id="svg-g">
                        <title>Map</title>
                        <path d="m85.6,61.2c4,-1 15,-1 19,-1c3,0 6,1 12,1c3,0 7.04132,0.84723 11,2c6.07233,1.76827 10.94341,2.14772 16.00001,4c5.93866,2.17538 12.7485,4.46587 18,7c7.69493,3.71323 15.06615,3.66233 21,5c7.1019,1.60098 10.01291,1.83982 11,2c3.12144,0.50654 4,2 6,2c2,0 5,2 6,2c4,0 4.83846,1.69148 12,3c11.84549,2.16434 22.01242,0.50186 32,1c10.03738,0.50062 20,1 24,1c6,0 11,0 18,0c5,0 10,0 13,0c3,0 5.00974,-0.19707 7,0c5.07422,0.50245 10.02475,2.93919 15,5c7.03607,2.91443 18.85599,9.34115 28,13c13.80215,5.52274 27.96881,12.49957 40,13c6.99396,0.29091 12.00052,-4.06449 16,-4c31.01208,0.50007 66.59433,13.33945 91,20c27.62534,7.53923 43.94583,9.14859 51.99997,12c2.98096,1.05536 5.18604,2.69255 7,4c4.58905,3.30762 8.42822,10.42336 13,16c4.48297,5.46835 10.1192,9.84937 19,17c6.08337,4.89821 11.88666,10.09627 17,16c8.80798,10.16953 13.90381,17.06528 18,23c4.88647,7.0797 9.10626,14.59286 14,21c3.43365,4.49554 8,9 12,13.00002c8,8 12.21289,13.07739 15,18c2.03143,3.58792 2.90338,9.01691 4,15c0.91925,5.01547 1,13 1,18c0,7 -0.75146,11.00772 -1,15c-0.50098,8.04669 -3.29944,20.88422 -14,49c-7.20233,18.92422 -14.92218,37.62747 -21,54c-4.73352,12.75122 -6.75531,17.13202 -9,21c-1.80969,3.11847 -4.63873,8.44296 -7,10c-4.49573,2.96448 -10.42377,7.21906 -20,11c-7.67004,3.02832 -16.90314,4.30801 -26,7c-26.74615,7.91479 -56.61005,17.2767 -93.99997,28c-23.77997,6.82001 -44,7 -52,7c-6,0 -12,0 -22,-1c-10,-1 -20.09525,-0.18976 -32,-2c-18.22952,-2.772 -34.32455,-5.22101 -50,-9c-22.75742,-5.4863 -43.53976,-17.46872 -51,-19c-4.89789,-1.00534 -11.12668,-3.54831 -19,-6c-16.31531,-5.08044 -24,-8 -29,-10c-5,-2 -10.89359,-4.44901 -17,-9c-6.26236,-4.66721 -14.60376,-14.4733 -25,-27c-9.57954,-11.54263 -15.76111,-19.52609 -23,-32c-6.73405,-11.60397 -14.46729,-23.39908 -20,-39c-1.37813,-3.88599 -4,-13 -8,-22c-4,-9 -5.41589,-14.76108 -7.00001,-18c-1.38935,-2.84073 -3,-5 -3,-7c0,-1 -1.38904,-3.81796 -12,-27c-7.26855,-15.87979 -12.97194,-33.44205 -25,-60.00002c-4.61255,-10.18451 -9.40163,-17.8412 -12,-25c-3.56205,-9.81386 -7.994,-23.83551 -9,-33c-0.76382,-6.95821 -0.27189,-12.00616 0,-18c0.50051,-11.03401 5.17361,-24.25948 9,-35c3.30524,-9.27768 8,-16 11,-19c1,-1 2.69255,-3.186 4,-5c3.30762,-4.58908 6,-7 8,-9c1,-1 4.8819,-5.07278 8,-10c1.92806,-3.04673 4.28859,-4.86829 6,-9c1.21015,-2.92156 2,-4 2,-5c0,-1 0,-2 0,-3c0,0 0,0 0,2l0,1l0,1" id="0" stroke="#000" fill="none"/>
                        <ellipse ry="33.5" rx="19" id="1" cy="147.7" cx="110.6" stroke="#000" fill="#fff"/>
                        <ellipse ry="42" rx="38.5" id="2" cy="258.2" cx="173.1" stroke="#000" fill="#fff"/>
                        <ellipse ry="47" rx="38.5" id="3" cy="396.2" cx="280.1" stroke="#000" fill="#fff"/>
                        <ellipse ry="34" rx="66.5" id="4" cy="379.2" cx="511.1" stroke="#000" fill="#fff"/>
                        <ellipse ry="50.5" rx="54.5" id="5" cy="218.7" cx="499.1" stroke="#000" fill="#fff"/>
                        <ellipse ry="39.5" rx="50" id="6" cy="156.7" cx="290.6" stroke="#000" fill="#fff"/>
                    </g>
                </svg>
            </div>
    )
}

export default ShopMap


// const ShopMap = () => {
    
//     const context = useContext(DataContext)
//     let {
//         zones,
//         handleClick,
//         IDclick,
//         handleZones,
//     } = context

//     handleZones()

//     useEffect(() => {
//         if(IDclick>0){
//             let g = document.getElementById("svg-g")
//             let child = g.querySelectorAll("ellipse")
//             child.forEach(ellipse => {
//                 if(zones[ellipse.id-1].taken != 0){
//                     ellipse.classList.add("taken")
//                     ellipse.classList.remove("tobetaken")
//                 }else{
//                     ellipse.classList.add("tobetaken")
//                     ellipse.classList.remove("taken")
//                 }
//             })
//         }

//     }, [IDclick])

//     return (
//             <div>
//                 <svg onClick={handleClick} width="800" height="600" xmlns="http://www.w3.org/2000/svg">
//                     <g id="svg-g">
//                         <title>Map</title>
//                         <path d="m85.6,61.2c4,-1 15,-1 19,-1c3,0 6,1 12,1c3,0 7.04132,0.84723 11,2c6.07233,1.76827 10.94341,2.14772 16.00001,4c5.93866,2.17538 12.7485,4.46587 18,7c7.69493,3.71323 15.06615,3.66233 21,5c7.1019,1.60098 10.01291,1.83982 11,2c3.12144,0.50654 4,2 6,2c2,0 5,2 6,2c4,0 4.83846,1.69148 12,3c11.84549,2.16434 22.01242,0.50186 32,1c10.03738,0.50062 20,1 24,1c6,0 11,0 18,0c5,0 10,0 13,0c3,0 5.00974,-0.19707 7,0c5.07422,0.50245 10.02475,2.93919 15,5c7.03607,2.91443 18.85599,9.34115 28,13c13.80215,5.52274 27.96881,12.49957 40,13c6.99396,0.29091 12.00052,-4.06449 16,-4c31.01208,0.50007 66.59433,13.33945 91,20c27.62534,7.53923 43.94583,9.14859 51.99997,12c2.98096,1.05536 5.18604,2.69255 7,4c4.58905,3.30762 8.42822,10.42336 13,16c4.48297,5.46835 10.1192,9.84937 19,17c6.08337,4.89821 11.88666,10.09627 17,16c8.80798,10.16953 13.90381,17.06528 18,23c4.88647,7.0797 9.10626,14.59286 14,21c3.43365,4.49554 8,9 12,13.00002c8,8 12.21289,13.07739 15,18c2.03143,3.58792 2.90338,9.01691 4,15c0.91925,5.01547 1,13 1,18c0,7 -0.75146,11.00772 -1,15c-0.50098,8.04669 -3.29944,20.88422 -14,49c-7.20233,18.92422 -14.92218,37.62747 -21,54c-4.73352,12.75122 -6.75531,17.13202 -9,21c-1.80969,3.11847 -4.63873,8.44296 -7,10c-4.49573,2.96448 -10.42377,7.21906 -20,11c-7.67004,3.02832 -16.90314,4.30801 -26,7c-26.74615,7.91479 -56.61005,17.2767 -93.99997,28c-23.77997,6.82001 -44,7 -52,7c-6,0 -12,0 -22,-1c-10,-1 -20.09525,-0.18976 -32,-2c-18.22952,-2.772 -34.32455,-5.22101 -50,-9c-22.75742,-5.4863 -43.53976,-17.46872 -51,-19c-4.89789,-1.00534 -11.12668,-3.54831 -19,-6c-16.31531,-5.08044 -24,-8 -29,-10c-5,-2 -10.89359,-4.44901 -17,-9c-6.26236,-4.66721 -14.60376,-14.4733 -25,-27c-9.57954,-11.54263 -15.76111,-19.52609 -23,-32c-6.73405,-11.60397 -14.46729,-23.39908 -20,-39c-1.37813,-3.88599 -4,-13 -8,-22c-4,-9 -5.41589,-14.76108 -7.00001,-18c-1.38935,-2.84073 -3,-5 -3,-7c0,-1 -1.38904,-3.81796 -12,-27c-7.26855,-15.87979 -12.97194,-33.44205 -25,-60.00002c-4.61255,-10.18451 -9.40163,-17.8412 -12,-25c-3.56205,-9.81386 -7.994,-23.83551 -9,-33c-0.76382,-6.95821 -0.27189,-12.00616 0,-18c0.50051,-11.03401 5.17361,-24.25948 9,-35c3.30524,-9.27768 8,-16 11,-19c1,-1 2.69255,-3.186 4,-5c3.30762,-4.58908 6,-7 8,-9c1,-1 4.8819,-5.07278 8,-10c1.92806,-3.04673 4.28859,-4.86829 6,-9c1.21015,-2.92156 2,-4 2,-5c0,-1 0,-2 0,-3c0,0 0,0 0,2l0,1l0,1" id="0" stroke="#000" fill="none"/>
//                         <ellipse ry="33.5" rx="19" id="1" cy="147.7" cx="110.6" stroke="#000" fill="#fff"/>
//                         <ellipse ry="42" rx="38.5" id="2" cy="258.2" cx="173.1" stroke="#000" fill="#fff"/>
//                         <ellipse ry="47" rx="38.5" id="3" cy="396.2" cx="280.1" stroke="#000" fill="#fff"/>
//                         <ellipse ry="34" rx="66.5" id="4" cy="379.2" cx="511.1" stroke="#000" fill="#fff"/>
//                         <ellipse ry="50.5" rx="54.5" id="5" cy="218.7" cx="499.1" stroke="#000" fill="#fff"/>
//                         <ellipse ry="39.5" rx="50" id="6" cy="156.7" cx="290.6" stroke="#000" fill="#fff"/>
//                     </g>
//                 </svg>
//             </div>
//     )
// }

// export default ShopMap