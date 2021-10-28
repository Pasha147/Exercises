import colors from "colors";

//26:07 для того чтоб функция превратилась в миддлвеак нужно
//прописать несколько параметров: req, res, next
export function requestTime(req, res, next) {
  //req обычный объект, по этому в него можно добавлять поля
  req.requestTime = Date.now();

  //некст сообщает экспресу, что нужно идти к следующему миддлвею
  //если не вызвать, то приложение застынет и не будет работать
  next();
}

export function logger(req, res, next) {
  console.log(colors.bgGreen.black(`Req.time:>> ${req.requestTime}`));
  next();
}
