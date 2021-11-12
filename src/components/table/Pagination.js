import styled from 'styled-components';

const Wrapper = styled.div`
  color: #888;
`;

const Pagination = function({ count, page }) {

  const first = Number(page[0]?.id) + 1;
  const last = Number(page[page.length-1]?.id) + 1;

  return (
    <Wrapper>
      Showing{' '}
      <em>
        {first} to {last} of {count}
      </em>
    </Wrapper>
  );
};

export default Pagination;
