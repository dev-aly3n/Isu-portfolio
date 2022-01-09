import Image from "next/image";

interface props {
  contact: { site: string; username: string; logo: string; link: string };
}

const Contact: React.FC<props> = ({ contact }) => {
  return (
    <div className="contact-container">
      <a href={contact.link} target="_blank">
        <span>
          <Image
            alt={contact.site}
            src={`/media/logos/${contact.logo}.jpg`}
            layout="fill"
            objectFit="cover"
          />
        </span>
        <div>
          <h4>{contact.site}</h4>
          <p>{contact.username}</p>
        </div>
      </a>
    </div>
  );
};

export default Contact;
