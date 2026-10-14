
export default function TaskList({ list }) {
  return (
    <div className="h-86 mt-4 overflow-y-auto overflow-x-hidden rounded-xl border border-[#6B5140]/20 bg-[#1C1714]/40 p-4">

      {list.map((li) => (
        <div
          key={li.id}
          className="group mb-3 flex min-h-16 w-full items-center gap-4 rounded-xl border border-[#80634D]/20 bg-gradient-to-r from-[#30251F]/80 to-[#241C18]/80 px-4 transition-all duration-300 hover:border-[#B88A62]/50 hover:from-[#3A2B22] hover:to-[#2C211B] hover:shadow-lg hover:shadow-black/10"
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border border-[#8D725C]/50 bg-[#211914] transition-all duration-200 checked:border-[#C49A72] checked:bg-[#B88A62] checked:after:flex checked:after:h-full checked:after:items-center checked:after:justify-center checked:after:content-['✓'] checked:after:text-xs checked:after:font-bold checked:after:text-[#211914] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C49A72]"
          />

          {/* Task name */}
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm font-medium tracking-wide text-[#F3E8DD] transition-colors group-hover:text-white">
              {li.taskname}
            </h1>
          </div>

          {/* Action buttons */}
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              className="rounded-lg border border-transparent px-3 py-2 text-xs font-medium tracking-wide text-[#D6B18D] transition-all duration-200 hover:border-[#B88A62]/25 hover:bg-[#B88A62]/10 hover:text-[#F3D2B1] active:scale-95"
            >
              Edit
            </button>

            <button
              type="button"
              className="rounded-lg border border-transparent px-3 py-2 text-xs font-medium tracking-wide text-[#B9897B] transition-all duration-200 hover:border-[#B9897B]/20 hover:bg-[#B9897B]/10 hover:text-[#E6A99A] active:scale-95"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {list.length === 0 && (
        <div className="flex h-40 flex-col items-center justify-center gap-2 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#80634D]/25 bg-[#30251F] text-[#B88A62]">
            ✓
          </div>
          <p className="text-sm font-medium text-[#E8D9CA]">
            All clear for now
          </p>
          <p className="text-xs text-[#9B897A]">
            Your tasks will appear here.
          </p>
        </div>
      )}
    </div>
  );
}
