interface StackDescriptionProps {
  title: string | undefined
  description: string | undefined
  emoji: string | undefined
  image?: string
}

function StackDescription({
  title,
  description,
  emoji,
  image
}: StackDescriptionProps) {
  return (
    <div className="rounded bg-gradient-to-b from-purple-950 px-5 drop-shadow-[0_-15px_15px_rgba(255,255,255,0.25)]">
      <div className="flex justify-center items-center gap-3">
        <img className="w-10 h-10" src={emoji} alt="" />
        <h1 className="text-4xl text-center font-bold py-7 text-white">{title}</h1>
      </div>
      <p className="text-center text-white">{description}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default StackDescription
