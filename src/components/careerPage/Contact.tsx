interface props {
    contact: { site: string; username: string; logo: string; link:string; };
}

const Contact:React.FC<props>= ({contact}) => {
    return (
        <div className="p-2 hover:ring-4 ring-yellow-50 shadow-none rounded-full  duration-300">
        <a
          href={contact.link}
          target="_blank"
          className="no-select-a-tag flex justify-start h-24 w-72 bg-primary-300/80 pr-5 rounded-full !overflow-hidden
          "
        >
          <img
            src={`/media/logos/${contact.logo}.jpg`}
            className=" h-[95%] object-cover object-center rounded-full ml-0.5 mt-0.5"
          />
          <div className="flex flex-col ml-2 h-full justify-around  pr-2">
            <h4 className="text-3xl font-bold">{contact.site}</h4>
            <p className="text-lg font-medium">{contact.username}</p>
          </div>
        </a>
        </div>
    )
}

export default Contact