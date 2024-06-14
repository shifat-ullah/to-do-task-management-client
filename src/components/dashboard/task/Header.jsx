/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */


// const Header = ({text, bg, count}) => {
//     return (
//         <div className={`${bg} flex items-center  rounded text-white justify-center p-3`}>
//             <h1 className=" text-2xl font-semibold">{text}</h1>
//             <span className=" bg-white text-gray-900 ml-9 w-6 h-6 rounded-full">{count}</span>
//         </div>
//     );
// };

// export default Header;


const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center rounded text-white justify-center p-3`}>
            <h1 className="text-2xl font-semibold">{text}</h1>
            <span className="bg-white text-gray-900 ml-9 w-6 h-6 rounded-full">{count}</span>
        </div>
    );
};

export default Header;
