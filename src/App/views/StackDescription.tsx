interface StackDescriptionProps {
  title: string | undefined
  description: string | undefined
  image? :string
}

function StackDescription({title, description, image}: StackDescriptionProps) {
  return (
    <div className='rounded bg-gradient-to-b from-purple-950 '>
      <h1 className='text-4xl text-center font-bold py-7 text-white'>{title}</h1>
      <p className="text-center text-white">{description}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default StackDescription