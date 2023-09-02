import React from 'react';

const TestimonialCard = ({ imageSrc, quote, author, role }) => {
  return (
    <figure className="md:flex bg-slate-100 shadow-md rounded-xl p-8 md:p-0 white:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={imageSrc}
        alt="internees image"
      />
      <div className="pt-6 md:p-8 bg-white rounded-md text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">{quote}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{author}</div>
          <div className="text-slate-700 dark:text-slate-500">{role}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default TestimonialCard;
