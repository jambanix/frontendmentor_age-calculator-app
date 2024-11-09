
export const Result = ({ value, type }) => {
  return (
    <div className="flex gap-2 text-heading-mobile md:text-heading-desktop italic">
      <div className="flex gap-4 text-figma-purple">
        <h2>-</h2>
        <h2>-</h2>
      </div>
      <h2 className="font-extrabold">{type}</h2>
    </div>
  )
}