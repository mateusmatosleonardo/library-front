import Image from "next/image";
import NotFoundIcon from '@/public/no-image.svg';

type SingleBookProps = {
  cover?: any;
  title: string;
  author: string;
  onClick: () => void;
}

export default function SingleBook(props: SingleBookProps) {
  return (
    <div className="hover:cursor-pointer" onClick={props.onClick}>
      <div className={`flex justify-center items-center w-[190px] h-[280px] rounded-lg ${props?.cover ? '' : 'border border-slate-200'}`}>
        {props?.cover ? (
          <Image alt='cover' className="w-full h-full rounded-lg" src={props.cover} />
        ) : (
          <Image alt='icon' className="w-8 h-8" src={NotFoundIcon} />
        )}
      </div>
      <div className="mt-2 w-full max-w-[190px]">
        <h3 className="text-lg text-center leading-6 text-zinc-600 font-semibold">
          {props.title}
        </h3>
        <p className="text-center text-zinc-800">
          {props.author}
        </p>
      </div>
    </div>
  )
}