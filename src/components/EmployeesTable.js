import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import styled from 'styled-components';
import { TableComponents } from '.';
import tableColumns from '../data/tableColumns.json';

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const EmployeesTable = function() {
  const employees = useSelector(state => state.employees);
  const { 
    ShowSelect,
    Pagination,
    PageNavigation,
    SearchInput,
  } = TableComponents;

  const data = useMemo(() => employees, [employees]);
  const columns = useMemo(() => tableColumns, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageCount,
    page,
    state: { pageIndex, pageSize, globalFilter },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );


  return (
    <TableWrapper>
      <OptionsWrapper>
        <ShowSelect pageSize={pageSize} setPageSize={setPageSize}/>
        <SearchInput
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
      </OptionsWrapper>
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </th>
                ))
              }
            </tr>
          ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <OptionsWrapper>
        <Pagination
          pageIndex={pageIndex}
          count={preGlobalFilteredRows.length}
          page={page}
        />
        <PageNavigation
          previousPage={previousPage}
          nextPage={nextPage}
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageIndex={pageIndex}
          pageCount={pageCount}
        />
      </OptionsWrapper>
    </TableWrapper>
  );
};

export default EmployeesTable;
