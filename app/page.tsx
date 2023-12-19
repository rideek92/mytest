import {IoApps} from "react-icons/io5";

export default function Home() {
  return (
    <main className={`flex flex-col justify-center items-center min-h-[100vh] bg-amber-200 select-none`}>
        <h1 className={`font-bold text-4xl`}>My first app</h1>
        <p className={`text-6xl my-3 hover:text-gray-400 cursor-pointer`}>{IoApps()}</p>
        <a className={`hover:text-gray-700`} target={`_blank`} href="https://wp.pl"> go to page</a>
    </main>
  )
}
