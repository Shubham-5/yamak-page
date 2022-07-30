import Card from "./Card";
import TextInput from "./TextInput";

const Cards = () => {
  return (
    <div className='row gx-5'>
      <div className='col-md-7 border-end'>
        <div className='pb-3 '>
          Enter input to get{" "}
          <span style={{ color: "#0188F3" }}>Writing Assistant</span>
        </div>

        <div className='pb-4 ms-3 text-muted card-header-inp'>
          <small>
            Words count:{"  "}
            <input type='number' className='py-2 ps-2 bg-light  num-inp' />
          </small>
          <small className='px-3'>
            Prompt:{"  "}
            <select
              className='select py-2 bg-light'
              aria-label='Disabled select example'
              disabled>
              <option selected>select </option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </small>
          <small>
            Creativity:{"  "}
            <select
              className='select py-2 bg-light'
              aria-label='Disabled select example'
              disabled>
              <option selected>select </option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </small>
        </div>

        <small className='d-flex justify-content-end text-muted mb-2 char-count'>
          word: 00 | character: 0 /250
        </small>
        <TextInput />
      </div>

      <div className='col-md-5 pt-4'>
        <div className='d-flex justify-content-center align-items-center pb-5 mt-4'>
          <button className='btn large-btn'>Write for me</button>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
