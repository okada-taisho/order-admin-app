import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableRowContent from "./tableRow";

const MenuTable = () => {
  return (
    <Table>
      <TableCaption>Menu一覧</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="min-w-52">メニュー名</TableHead>
          <TableHead>説明</TableHead>
          <TableHead className="text-right">金額</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRowContent />
      </TableBody>
    </Table>
  );
};

export default MenuTable
