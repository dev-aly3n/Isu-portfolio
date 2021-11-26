interface props {
    contact: { site: string; username: string; logo: string; link:string; };
}

const Contact:React.FC<props>= ({contact}) => {
    return (
        <a
          href={contact.link}
          target="_blank"
          className="flex justify-between h-24 bg-primary-300/80 pr-5 my-5 mx-3 rounded-full overflow-hidden"
        >
          <img
            src={`/media/logos/${contact.logo}.jpg`}
            className="w-full h-[95%] object-cover object-center rounded-full ml-0.5 mt-0.5"
          />
          <div className="flex flex-col ml-2 h-full justify-around  pr-2">
            <h4 className="text-3xl font-bold">{contact.site}</h4>
            <p className="text-lg font-medium">{contact.username}</p>
          </div>
        </a>
    )
}

export default Contact