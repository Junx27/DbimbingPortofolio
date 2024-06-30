// eslint-disable-next-line react/prop-types
function Button({ nameButton, className }) {
  return (
    <div
      className={` w-32 ${className} group relative p-2 rounded-full bg-blue-700 text-center text-white overflow-hidden cursor-pointer`}
    >
      <p className="transition-all duration-500 group-hover:-translate-x-32">
        {nameButton}
      </p>
      <div className="transition-all duration-700 absolute inset-0 -translate-x-32 group-hover:translate-x-0 bg-yellow-500 rounded-full text-center p-2">
        {nameButton}
      </div>
    </div>
  );
}

export default Button;
