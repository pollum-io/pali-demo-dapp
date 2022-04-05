import React from 'react';

interface IFooterCircleButton {
  src: string;
  alt: string;
}

export const CircleButton: React.FC<IFooterCircleButton> = ({ alt, src }) => (
  <button className="rounded-full bg-brand-deepPink100 w-8 h-8 md:w-9 md:h-9 text-center text-white flex justify-center items-center hover:bg-brand-royalblue">
    <img src={src} alt={alt} className="w-4 md:w-5" />
  </button>
);

interface IFooterTextButton {
  src: string;
  text: string;
  alt: string;
  link: string;
}
export const TextButton: React.FC<IFooterTextButton> = ({
  alt,
  text,
  src,
  link,
}) => (
  <div className="flex items-center h-max flex-row hover:opacity-90">
    <a
      href={link}
      className="rounded-full px-1 md:px-3 text-gray-100 font-poppins text-sm flex flex-row items-center"
    >
      <img src={src} alt={alt} className="mr-1.5 w-4 md:w-5" />
      {text}
    </a>
  </div>
);
