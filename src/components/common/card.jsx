import iconPresentation from "./iconPresentation";

const card = ({ link, title, author }) => {
  return (
    <a className="card_link" href={link} target="_blank" rel="noreferrer">
      <div className="card">
        <div className="card_content">
          {iconPresentation}
          <div className="card_title">{title}</div>
          <div className="card_author">{author}</div>
        </div>
      </div>
    </a>
  );
};

export default card;
