export default function TestPage() {
  let count = 0;
  return (
    <div className="w-full h-screen  flex justify-center items-center">
      <div className="w-[450px] h-[250px] shadow flex justify-center items-center">
        <button
          onClick={() => {
            console.log("- clicked");
          }}
          className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] mx-[20px] cusor-pointer"
        >
          -
        </button>
        <span className="text-[40px] font-bold tex-center w-[100px] h-[40px] mx-[10px] flex justify-center item-center">
          {count}
        </span>
        <button
          onClick={() => {
            console.log("+ clicked");
          }}
          className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cusor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
