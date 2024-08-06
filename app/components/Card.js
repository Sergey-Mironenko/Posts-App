'use client'

import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';
import Link from "next/link";

export default function Card({ title, body, id }) {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <div
      className={classNames(
        'w-1/3 h-52 mt-10 m-auto p-5 rounded-md text-black shadow-card bg-white flex flex-col place-content-between',
        { 'w-1/2 h-64': onTablet },
        { 'm-0 w-full h-fit': onPhone },
      )}
    >
      <h2
        className={classNames(
          'mb-5 text-xl font-bold',
          { 'text-base': onPhone },
        )}
      >
        {title}
      </h2>

      <div>
        <p
          className={classNames(
            'mb-3 text-slate-400',
            { 'text-xs': onPhone },
          )}
        >
          {body.slice(0, 20) + '...'}
        </p>

        <Link
          className="text-teal-400 hover:underline"
          href={'/post/' + id}
        >
          More
        </Link>
      </div>
    </div>
  );
}
