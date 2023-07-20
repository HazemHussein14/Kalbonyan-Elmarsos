const CustomDot = ({ onClick, active }) => {
  return (
    <li className="mr-5">
      <button
        className={`w-3 h-3 bg-[#eee] rounded-[50%] cursor-pointer ${
          active ? "bg-[rgb(116,25,6)]" : "bg-[#eee]"
        }`}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default CustomDot;
