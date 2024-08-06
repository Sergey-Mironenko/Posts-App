'use client'

import classNames from "classnames";
import { useMediaQuery } from 'react-responsive';
import Link from "next/link";

export default function PostContent({ post }) {
  const onTablet = useMediaQuery({ maxWidth: 1200 });
  const onPhone = useMediaQuery({ maxWidth: 600 });

  return (
    <>
      <Link
        className={classNames(
          'block mb-3 text-lg px-5 py-2 rounded-md font-bold bg-red-100 w-fit text-red-600 hover:shadow-md',
          { 'text-base': onTablet },
          { 'text-xs': onPhone },
        )}
        href="/"
      >
        Back
      </Link><br />

      <div
        className={classNames(
          'shadow-card bg-white p-10 rounded-lg',
          { 'text-base p-6': onTablet },
          { 'text-xs p-3': onPhone },
          { 'text-2xl': !onPhone && !onTablet },
        )}
      >
        <h2
          className={classNames(
            'mb-10 font-bold',
            { 'mb-5': onPhone },
          )}
        >
          {post.title}
        </h2>

        <p
          className={classNames(
            'mb-3 text-slate-400',
            { 'text-base': onTablet },
            { 'text-xs': onPhone },
          )}
        >
          {post.body}
        </p>
      
        <strong
          className={classNames(
            'text-teal-400'
          )}
        >
          Author ID: {post.userId}
        </strong>
      </div>
    </>
  );
}
