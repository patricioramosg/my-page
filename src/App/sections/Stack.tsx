import Flow from "../Flow"
import NodeDescription from "../NodeDescription"

function Stack() {
  return (
    <section className='h-[90vh] snap-start flex flex-col sm:flex-row ' id='stack'>
        <div className="sm:w-[65%]">
          <Flow />
        </div>
        <div className="sm:w-[35%] h-[50hv] bg-slate-700">
          <NodeDescription />
        </div>
    </section>
  )
}

export default Stack