interface props {
    recom: {
        name: string;
        job: string;
        type: string;
        desc: string;
        image: string;
        url: string;
      }
}

const Recom:React.FC<props> = ({recom}) =>{

    return (
        <div className=" flex h-full bg-primary-500/10 p-5 rounded-3xl gap-5">
        <img
          src={recom.image}
          className="w-28 h-28 rounded-full"
        />
      <div className="w-5/6 flex flex-col">
          <h4 className="text-xl font-normal">{recom.name}</h4>
          <h4 className="text-base font-normal">{recom.job}</h4>
        <p className="text-white/70 ">
          {recom.type}
        </p>
        <p className="text-sm mt-3">
          {recom.desc}
        </p>
      </div>
    </div>
    )
}
export default Recom;