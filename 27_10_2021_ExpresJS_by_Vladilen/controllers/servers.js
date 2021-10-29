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
  const newServer = {
    id: Date.now(),
    ...req.body,
  };
  servers.push(newServer);
  res.status(201).json({ newServer });
};

export const remove = (req, res) => {
  console.log("ID:", req.params.id);
  servers = servers.filter((s) => s.id !== req.params.id);
  res.json({ message: "Server has been removed" });
};
