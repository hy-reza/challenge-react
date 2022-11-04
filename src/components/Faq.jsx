const Faq = () => {
  return (
    <>
      {/* faq section */}
      <section className="faq container-fluid pt-5" id="faq">
        <div className="container-lg m-auto row p-0 m-0">
          <div className="col-md-6 p-0">
            <h2 className="faq-title fw-bold">Frequently Asked Question</h2>
            <p className="faq-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="col-md-6 p-0">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {" "}
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ab, nulla.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-top">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia, repudiandae?
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-top">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Berapa hari sebelumnya sebainya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam, amet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-top">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam, amet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-top mb-5">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ipsam, amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq section */}
    </>
  );
};

export default Faq;
