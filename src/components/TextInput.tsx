const TextInput = () => {
  return (
    <div className='card mb-2 textarea-card'>
      <div className='d-flex flex-row inp-controls'>
        <span className='ps-4 pe-2 pt-2'>hyperlink</span>
        <span className='px-2 pt-2'>text cut</span>
        <span className='px-2 pt-2'>underline</span>
        <span className='px-2 pt-2'>underline</span>
      </div>
      <hr className='mx-2' />

      <div className='card-body pt-2'>
        <textarea
          style={{ minWidth: "100%" }}
          name=''
          id=''
          cols={30}
          rows={10}></textarea>
      </div>
    </div>
  );
};

export default TextInput;
