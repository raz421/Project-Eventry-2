import ActionButton from "../ActionButton";

export default async function EventDetails() {
  
  return (
    <div className="flex items-end">
      <div className="flex-auto py-4">
        <h1 className="font-bold text-2xl">Google I/O Extended</h1>
        <p className="text-[#9C9C9C] text-base mt-1">
          Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
        </p>
        <div className="text-[#737373] text-sm mt-1">
          <span>1k Interested</span>
          <span>|</span>
          <span>40K Going</span>
        </div>
      </div>

      <ActionButton action={true} />
    </div>
  );
}
