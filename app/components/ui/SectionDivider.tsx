export default function SectionDivider({ number }: { number: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-20 w-px bg-slate-400/30" />
      <div className="grid h-14 w-14 place-items-center rounded-full border border-slate-400/30 bg-offwhite text-sm font-black text-slate-400">
        {number}
      </div>
    </div>
  );
}
