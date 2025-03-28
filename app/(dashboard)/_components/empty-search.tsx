export default function EmptySearch() {
  return (
   <div className="h-ful flex flex-col items-center justify-center">
     <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
     <p className="text-muted-foreground text-sm mt-2">Try Searching for something else.</p>
   </div>
  )
}
