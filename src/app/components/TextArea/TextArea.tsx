import React, { FC } from 'react';

interface TextAreaProps {
  labelText?: string;
  placeHolderText?: string;
}

const TextArea: FC<TextAreaProps> = ({ labelText, placeHolderText }) => {
  return (
    <div className='flex flex-col w-full gap-[5px]'>
      {labelText && <label htmlFor="" className='md:text-[16px] text-[15px] text-black'>{labelText}</label>}
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        className='rounded-[7px] border p-[10px] resize-none bg-white text-black md:text-[16px] text-[14px]'
        placeholder={placeHolderText}
      />
    </div>
  );
};

export default TextArea;
