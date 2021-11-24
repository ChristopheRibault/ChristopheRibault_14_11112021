import styled from 'styled-components';

const MAX_PAGE_BTN = 10;

const Wrapper = styled.div`
  display: flex;
  gap: .3em;
`;

const StyledBtn = styled.button`
  padding: .5em;
  cursor: pointer;
  &:disabled {
    cursor: grab;
  }
`;

const StyledForm = styled.form`
  display: flex;
  gap: .3em;
  & input {
    width: 40px;
  }
`;

const PageNavigation = function({
  previousPage,
  nextPage,
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageCount,
}) {

  const pageNumbers = Array
    .apply(null, Array(pageCount))
    .map((_, i) => i + 1);

  const onSubmitPage= (e) => {
    e.preventDefault();
    gotoPage(e.target.page.value);
  };

  return (
    <Wrapper>
      <StyledBtn onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </StyledBtn>
      { 
        pageCount < MAX_PAGE_BTN &&
        pageNumbers.map(num => (
          <StyledBtn
            key={`btnToPage${num}`}
            disabled={pageIndex === num - 1}
            onClick={() => gotoPage(num - 1)}
          >{num}</StyledBtn>
        ))
      }
      {
        pageCount > MAX_PAGE_BTN - 1 &&
        <StyledForm onSubmit={onSubmitPage}>
          <input 
            type='text'
            pattern='[0-9]+'
            name='page'
          />
          <StyledBtn
            type='submit'
          >
            Go to page
          </StyledBtn>
        </StyledForm>
      }
      <StyledBtn onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </StyledBtn>
    </Wrapper>
  );
};

export default PageNavigation;
