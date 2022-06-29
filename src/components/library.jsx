import DocumentCard from "./common/card_document";

const dtpUrl = "www.interreg-danube.eu/uploads/media/approved_project_";
const Library = () => {
  return (
    <div>
      <br />
      <h2 className="align_center">Библиотека</h2>
      <br />
      <div className="card_container">
        <DocumentCard
          title="Guideline on the Development of National Cycling Plan"
          link={`http://${dtpUrl}public/0001/44/f8ecf58fffeb4f347bd9df73f96a208677bf4d73.pdf`}
        />
        <DocumentCard
          title="Guidelines to define a National Cycle Route Network"
          link={`http://${dtpUrl}public/0001/44/ca2643f02335ee2be8a59a87efe32304069b3a94.pdf`}
        />
        <DocumentCard
          title="Guidelines for Sustainable Bicycle Tourism"
          link={`https://${dtpUrl}output/0001/45/babfe28a4c4be2f1067cc66522bf9de4dbb11913.pdf`}
        />
        <DocumentCard
          title="Guidelines for EcoSystem Services Based Ecotourism Strategy Development"
          link={`https://${dtpUrl}output/0001/47/1cf84489154cf8a85d0dd0ef7c093d083e09b6b7.pdf`}
        />
        <DocumentCard
          title="Study on SMART Bike Rest Places Concept Development"
          link={`https://${dtpUrl}output/0001/40/fb37208e8a5cc367ab824aa06fc80177e405df12.pdf`}
        />
      </div>
    </div>
  );
};

export default Library;
