const DocumentCard = ({ link, title }) => {
  return (
    <a className="card_link" href={link} target="_blank" rel="noreferrer">
      <div className="document_card">
        <div className="card_content">
          <div className="document_card_title">{title}</div>
        </div>
      </div>
    </a>
  );
};

export default DocumentCard;
