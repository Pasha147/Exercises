let servers = [
  { id: "1", name: "AWS", status: "working" },
  { id: "2", name: "Google Cloud", status: "working" },
  { id: "3", name: "Yandex Cloud", status: "working" },
  { id: "4", name: "Microsoft", status: "pending" },
];

//котнроллеры - это обычные функции
export const getAll = (req, res) => {
  res.status(200).json(servers);
};

export const create = (req, res) => {
  // когда создаем что то возвращаем статус 201
  console.log("req.body>>", req.body);
  res.status(201).json({});
};
