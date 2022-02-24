import { getTotalPages } from "../../helpers/paginationPages";

interface FooterProps {
  handleFetchMore: (page: string) => void;
  currentPage: string;
  numberOfPages: number;
}

const TableFooter = ({
  handleFetchMore,
  currentPage,
  numberOfPages,
}: FooterProps) => {
  const pagesArray: string[] = getTotalPages(numberOfPages);
  return (
    <tfoot className='w-full bg-gray-100 border-t-2 '>
      <tr className='w-full '>
        <td className='w-full  px-24 text-right py-2' colSpan={8}>
          {pagesArray.map((page, index) => {
            return (
              <button
                disabled={currentPage === page}
                onClick={() => handleFetchMore(page)}
                className={`ml-3 text-featherDarkPurple text-lg ${
                  currentPage === page && " bg-featherPurple  "
                } px-2 rounded-full`}
                key={index}>
                <p className={`${currentPage === page && "  text-white"}`}>
                  {page}
                </p>
              </button>
            );
          })}
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
