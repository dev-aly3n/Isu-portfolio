interface props {
  contact: { site: string; username: string; logo: string; link: string };
}

const Contact: React.FC<props> = ({ contact }) => {
  return (
    <div className="contact-container">
      <a href={contact.link} target="_blank">
        <img src={`/media/logos/${contact.logo}.jpg`} />
        <div>
          <h4>{contact.site}</h4>
          <p>{contact.username}</p>
        </div>
      </a>
    </div>
  );
};

export default Contact;
