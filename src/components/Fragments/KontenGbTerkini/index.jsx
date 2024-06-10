import { Chip } from "@nextui-org/react";
import TableComponent from "../../Elements/TableComponent";

const customColumns = [
  {
    uid: "name",
    name: "Full Name",
    sortable: true,
    renderCell: (item) => (
      <div className="flex flex-col">
        <p className="text-bold text-sm">{`${item.firstName} ${item.lastName}`}</p>
      </div>
    ),
  },
  {
    uid: "email",
    name: "Email Address",
    sortable: false,
    renderCell: (item) => item.email,
  },
  {
    uid: "age",
    name: "Age",
    sortable: true,
    renderCell: (item) => item.age,
  },
  {
    uid: "country",
    name: "Country",
    sortable: true,
    renderCell: (item) => item.country,
  },
  {
    uid: "status",
    name: "Status",
    sortable: true,
    renderCell: (item) => (
      <Chip
        className="capitalize"
        color={statusColorMap[item.status]}
        size="sm"
        variant="flat"
      >
        {item.status}
      </Chip>
    ),
  },
];

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const customData = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", country: "USA", status: "active", age: 28 },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", country: "Canada", status: "paused", age: 34 },
    { id: 3, firstName: "David", lastName: "Wilson", email: "david.wilson@example.com", country: "UK", status: "active", age: 23 },
    { id: 4, firstName: "Michael", lastName: "Johnson", email: "michael.johnson@example.com", country: "Australia", status: "active", age: 32 },
    { id: 5, firstName: "Emily", lastName: "Brown", email: "emily.brown@example.com", country: "Germany", status: "paused", age: 29 },
    { id: 6, firstName: "Daniel", lastName: "Martinez", email: "daniel.martinez@example.com", country: "France", status: "active", age: 35 },
    { id: 7, firstName: "Olivia", lastName: "Garcia", email: "olivia.garcia@example.com", country: "Italy", status: "vacation", age: 31 },
    { id: 8, firstName: "Matthew", lastName: "Lopez", email: "matthew.lopez@example.com", country: "Spain", status: "active", age: 27 },
    { id: 9, firstName: "Sophia", lastName: "Rodriguez", email: "sophia.rodriguez@example.com", country: "Brazil", status: "paused", age: 30 },
    { id: 10, firstName: "William", lastName: "Lee", email: "william.lee@example.com", country: "Japan", status: "active", age: 33 },
    { id: 11, firstName: "Isabella", lastName: "Hernandez", email: "isabella.hernandez@example.com", country: "China", status: "vacation", age: 28 },
    { id: 12, firstName: "James", lastName: "Gonzalez", email: "james.gonzalez@example.com", country: "Russia", status: "active", age: 36 },
    { id: 13, firstName: "Emma", lastName: "Nelson", email: "emma.nelson@example.com", country: "India", status: "paused", age: 25 },
    { id: 14, firstName: "Benjamin", lastName: "Carter", email: "benjamin.carter@example.com", country: "South Africa", status: "active", age: 37 },
    { id: 15, firstName: "Ava", lastName: "Wright", email: "ava.wright@example.com", country: "Mexico", status: "vacation", age: 29 },
    { id: 16, firstName: "Alexander", lastName: "Perez", email: "alexander.perez@example.com", country: "Argentina", status: "active", age: 32 },
    { id: 17, firstName: "Mia", lastName: "Roberts", email: "mia.roberts@example.com", country: "Nigeria", status: "paused", age: 31 },
    { id: 18, firstName: "Daniel", lastName: "Turner", email: "daniel.turner@example.com", country: "Egypt", status: "active", age: 35 },
    { id: 19, firstName: "Abigail", lastName: "Phillips", email: "abigail.phillips@example.com", country: "Iran", status: "vacation", age: 26 },
    { id: 20, firstName: "Ethan", lastName: "Campbell", email: "ethan.campbell@example.com", country: "Iraq", status: "active", age: 34 },
    { id: 21, firstName: "Charlotte", lastName: "Parker", email: "charlotte.parker@example.com", country: "Israel", status: "paused", age: 30 },
    { id: 22, firstName: "Mason", lastName: "Evans", email: "mason.evans@example.com", country: "Syria", status: "active", age: 33 },
    { id: 23, firstName: "Harper", lastName: "Edwards", email: "harper.edwards@example.com", country: "Turkey", status: "vacation", age: 28 },
    { id: 24, firstName: "Evelyn", lastName: "Collins", email: "evelyn.collins@example.com", country: "Saudi Arabia", status: "active", age: 37 },
    { id: 25, firstName: "Elijah", lastName: "Stewart", email: "elijah.stewart@example.com", country: "Pakistan", status: "paused", age: 27 },
];

const statusOptions = [
  { uid: "active", name: "Active" },
  { uid: "paused", name: "Paused" },
  { uid: "vacation", name: "Vacation" },
];

const initialVisibleColumns = ["name", "age", "email", "status"];

const KontenGbTerkini = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl font-bold text-active h-16">Gempa Bumi Terkini</p>
      <p className="">
        Gempa bumi terkini merupakan informasi gempabumi yang{" "}
        <span className="font-bold" style={{ display: "inline-block" }}>
          didiseminasikan dalam waktu kurang dari 5 menit
        </span>{" "}
        setelah kejadian gempa. Informasi ini merupakan informasi gempabumi
        secara cepat dan tidak ada pemutakhiran parameter gempabumi. Parameter
        gempabumi yang final bisa jadi berbeda.
      </p>
      <TableComponent
        columns={customColumns}
        data={customData}
        statusOptions={statusOptions}
        initialVisibleColumns={initialVisibleColumns}
      />
    </div>
  );
};

export default KontenGbTerkini;
