import { Pagination } from "@mantine/core";
import _ from "lodash";

interface PaginateProps {
   total: number;
   onPageChange: (page: number) => void;
   pageSize: number;
   currentPage: number;
}

export default function Paginate({ total, onPageChange, pageSize, currentPage }: PaginateProps) {
   const pageCount = Math.ceil(total / pageSize); // Saqlandi, qolgan sonlarni olish uchun Math.ceil ishlatilgan
   const pages = _.range(1, total + 1);

   const handlePageChange = (page: number) => {
      onPageChange(page);
   };

   return (
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", marginTop: "26px" }}>
         <Pagination value={currentPage} onChange={handlePageChange} total={pageCount} radius='md' />
      </div>
   );
}