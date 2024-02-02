

const SearchInput = () => {
  return (
    <div className="flex justify-end absolute w-[100%] right-10 top-24 z-[99]">
          <input
            type="text"
            className=" w-[20%] border rounded-full py-2 px-3"
            placeholder="Enter text..."
          />
        </div>
  )
}

export default SearchInput