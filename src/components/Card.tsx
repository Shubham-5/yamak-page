const Card = () => {
  return (
    <div className='card mb-2 '>
      <div className='row g-0 '>
        <div
          className='col-2 d-flex justify-content-center align-items-center border-end'
          style={{ color: "#7FC3F9" }}>
          copy
        </div>
        <div className='col-10 '>
          <div className='card-body p-1'>
            <p className='card-text text-muted'>
              <small>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
