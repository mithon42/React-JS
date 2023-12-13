export default function ListLi({ text }) {
  return (
    <li className="text-white uppercase py-2 px-4 hover:bg-black text-sm tracking-wide cursor-pointer font-medium active:bg-[#04AA6D]">
      <a href="#">{text}</a>
    </li>
  );
}
