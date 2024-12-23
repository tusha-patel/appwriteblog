import React, { forwardRef, useId } from 'react';

const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {
    let id = useId();
    return (
        <div className='w-full'>
            {
                label && <label className='' htmlFor={id}>{label}</label>
            }
            <select id={id} {...props} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}   >
                {
                    options?.map((option) => (
                        <React.Fragment key={option} value={option}>
                            <option>{option}</option>
                        </React.Fragment>
                    ))
                }
            </select>
        </div>
    );
}

export default forwardRef(Select);
