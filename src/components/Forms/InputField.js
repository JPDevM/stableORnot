import React from 'react'

const InputField = ({lableProp, refProp, placeholderProp, errorProp}) => {
    return (
        <div className="w-full mb-2">
            {/* <p>{errorProp || lableProp}</p> */}
            <input ref={refProp} placeholder={placeholderProp} className="w-full focus:outline-none placeholder-gray-500 py-2 px-2 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
        </div>
    )
}

export default InputField;