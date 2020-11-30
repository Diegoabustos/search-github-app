import React from "react";

export interface CardRepoProps {
  repositorie?: any;
}

const CardRepo: React.SFC<CardRepoProps> = ({ repositorie }: any) => {
  return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <div className="card is-shady">
                <div className="card-content">
                  <div className="content">
                    <h4>{repositorie.name}</h4>
                    <p>{repositorie.description}</p>
                    <a href={repositorie.html_url}>Repositorie Link</a>
                    {/* <span className="button is-link modal-button" data-target="modal-image2">Image modal</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
  );
};

export default CardRepo;
